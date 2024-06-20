const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
// const info = process.env.DATA;

app.use(express.static(path.join(__dirname, 'static')));

// app.get("/", (req, res)=>{
//     res.send("bro");
// })

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname , 'static', 'index.html'));
});

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})