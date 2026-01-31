const connectDB = require("./config/database");
const app = require("./src/app");
require('dotenv').config()

app.listen(3000,()=>{
    console.log('welcome to my server');
    connectDB()
})