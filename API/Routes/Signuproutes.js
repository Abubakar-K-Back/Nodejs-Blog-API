  const express=require('express');

  const router=express.Router();

  require("dotenv").config()

  const user = require('..//Models/User.js')

  const Posts=require('../Models/Posts')

  const comments=require('../Models/comments')

  const bcrypt=require('bcrypt')

  const jwt=require("jsonwebtoken")

  const mongoose=require('mongoose')
  mongoose.connect("mongodb://localhost:27017/useres23213s",{useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true})




  //Getting All Users
  router.get('/Users',(req,res,next)=>{

       user.find(function(err,user){

        if(err)throw err

          res.json(user)

            })
    });





  //Getting All Blogs
  router.get('/GetBlogs',(req,res,next)=>{

    Posts.find(function(err,Post){

    if(!err){

    res.json(Post)

    }
  })


  });





  //Sign Up User
  router.post('/Users',(req,res)=>{

    let newuser=new user( {

      name:req.body.name,
      email:req.body.email,
      password:req.body.password,


  });



    if(!req.body.name || !req.body.email || !req.body.password){


      res.json("Please fill the Credentials")
      return

    }


    user.findOne({name:req.body.name},(err,User)=>{

      if(User)
      {

          res.json("User Name Already Registered")
          return
      }


  user.findOne({email:req.body.email},(err,User)=>{
    if(User)
    {
      res.json("Email Already Registered")
      return
    }


  newuser.save((err,user)=>
  {
      if (err) throw err

      else
      {

        res.json("Successfully Signed Up")

      }
  })
  });
  })
    })






  process.env.SecretKey="SecretKey"


  //User Login
  router.post('/Login',(req,res)=>{

    if(!req.body.password || !req.body.name){

      return res.json({success:false,msg:"Please Fill the Credentials"})
    }


    user.findOne({name:req.body.name},(err,User)=>{

      if(err || !User){

        return res.json({success:false,msg:"Username not Registered"})

            }

    else
    {
        if(req.body.password!=User.password)
        {
                  return res.json({success:false,msg:"Password Invalid"})
        }

        const payload={

          id:User._id,
          email:User.email,
          Username:User.Username,

        }
        date=Date.now()
        token=jwt.sign({payload},process.env.SecretKey,(err,token)=>{

            res.json({success:true,msg:"User Logged in",token,Userid:{Userid:User.email},UserloggedIn:{UserloggedIn:date}})

          })
    }
  })
  })







  router.post('/postcomment',(req,res)=>{
    let newcomment=new comments({

      commentBody:req.body.commentBody,
      commentCreatedBy:req.body.commentCreatedBy,
      Posttitle:req.body.Posttitle
    })



    if(!req.body.commentBody){

      res.json({success:false,msg:"Enter Comment Body"})
      return

    }




    //Posting a comment
    newcomment.save((err,comment)=>{

      if(err)
      {
        res.json({success:false,msg:"Error in Posting Comment"})
        throw err
        return

      }
      else
      {
        res.json({success:true,msg:"Comment Posted..",comment})
      }

    })
  })



  //Creating a Post/Blog/Question
  router.post('/CreatePost',(req,res)=>{
    let newpost=new Posts({
        title:req.body.title,
        Body:req.body.Body,
        CreatedBy:req.body.CreatedBy,
        Createdat:req.body.Createdat,
    })

    if(!req.body.title)
    {
      res.json({
        success:false,
        msg:"Pst Must have A titloe"
      })
      return
    }



    if(!req.body.Body){
      res.json({
        success:false,
        msg:"Post Must have A Body"
      })
      return
    }

    newpost.save((err,post)=>{

      if(!err)
        {
          res.json({success:true,msg:"Post Saved"})

      }
      else
      throw err
      return
    })
    })
  module.exports=router;

