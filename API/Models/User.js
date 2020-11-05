const mongoose= require('mongoose');

const Schema= mongoose.Schema;

let User=new Schema({


  name:{

    type:String,
    required:true,
    unique:true,

},
   email:{

        type:String,
        required:true
      },
    password:{
        type:String,
        required:true
    }


});

const Users=module.exports=mongoose.model('Users',User);
