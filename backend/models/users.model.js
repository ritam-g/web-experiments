const  mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    userName:String,
    age:Number
})
const UserModel=mongoose.model('users',userSchema)
module.exports=UserModel