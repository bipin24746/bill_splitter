import express from "express";
const app = express();
app.use(express.json);
const port = 8080;
app.listen(port,()=>{
    console.log("?backend is started");
})


// import express from "express";
// const app = express();
// app.use(express.json);
// const port = 8080;

// app.listen(port,()=>{
//     console.log(`Backend Server starts to run on port ${port}`);
// })