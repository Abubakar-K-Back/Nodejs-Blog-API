const mongoose= require('mongoose');

const Schema= mongoose.Schema;

let comment=new Schema({



  commentBody:{ type:String,required:true},

  commentCreatedBy:{type:String},


  Posttitle:{type:String},


  commentCreatedAt:{type:Date}


});
const comments=module.exports=mongoose.model('comment',comment);
