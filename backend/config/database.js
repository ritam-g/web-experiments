const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('server is running sucess fully');
        
    })
    .catch(err=>{
        console.log(err);
        
    })
}
module.exports=connectDB