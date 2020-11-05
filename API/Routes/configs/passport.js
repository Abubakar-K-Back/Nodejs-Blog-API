const LocalStrategy =require('passport-local').Strategy

const mongoose=require("mongoose")

const bcrypt = require("bcrypt")

const User = require('C:/Users/Abubakar/Desktop/Desktop Docs/Full Stack Web Devop Data/FPLatest/FinalFullstack/API/Models/User')

module.exports=function(passport)
{

  passport.use(

    new LocalStrategy({usernameField:'email'},(email,password,done)=>{


      User.findOne({email:email})
      .then(user=>{

        if(!user){
          return done(null,false,{message:"that is email not Registered"})
        }

        bcrypt.compare(password,user.password,(err,isMatch)=>{

          if(err)
          throw err;

          if(isMatch){
            return done(null,user);
          }
          else{
              return(done,false,{message:"Password Incorrect"});

          }


        })

      })
      .catch(err=>console.log(err))
    })

  );

  passport.serializeUser((user,done)=>
  {
    done(null,user.id);
  })
  passport.deserializeUser(function(id,done){

    User.findById(id,function(err,user){
      done(err,user)
    })
  })

}
