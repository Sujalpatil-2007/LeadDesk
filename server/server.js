require("dotenv").config();
const app = require("../server/src/app");
const connectDB = require("../server/src/config/db");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})