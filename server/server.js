require("dotenv").config();
const app = require("../server/src/app");
const connectDB = require("../server/src/config/db");

connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})