import express from "express";
import authR from "./routes/auth.js";
import dataR from "./routes/data.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authR);
app.use("/data", dataR);

app.listen(3003, ()=>{
    console.log("server runing on: http://localhost:3003");
})
