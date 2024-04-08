const express= require("express");
const cors = require("cors");
const ConnectDB = require("./connectDB");
const router = require("./routes/UserRoutes");
require("dotenv").config();
const app = express();

const PORT=8000;
const DB_Path = process.env.DB_PATH;

ConnectDB(DB_Path).then(
  console.log(`Successfully Connected to MongoDB Server`)
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);

app.listen(PORT,()=>console.log(`Server started on port: ${PORT}`));

