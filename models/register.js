const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const registerSchema =new Schema({
    name :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    options: {
        type:String,
        enum: ["student", "teacher"]
    },
});

module.exports = mongoose.model("registers",registerSchema);
