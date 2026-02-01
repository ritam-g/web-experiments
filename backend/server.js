const app = require("./src/app");
const connectDB = require("./src/config/database");
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log('database is connected');
    connectDB()
})