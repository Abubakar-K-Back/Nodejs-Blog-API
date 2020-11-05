const mongoose= require('mongoose');

const Schema= mongoose.Schema;

let Post=new Schema({


  title:{ type:String,required:true},

  Body:{ type:String,required:true},


  Comment:[{
     type:String,
    Commenter:String
  }],


  Likes:{  type:Number},

  Dislikes:{ type:Number},

  CreatedBy:{type:String},

  CreatedAt:{type:Date}

});
const Posts=module.exports=mongoose.model('Posts',Post);0
