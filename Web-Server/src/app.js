const express = require('express');
console.log(__dirname);
const app = express(); // creating an express app

//Express is a web framework for Node.js
app.use(express.static("/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/public"));//Serves up a static file for index.html ar /
app.use(express.static("/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/public/"));
app.get('/weather',(req,res)=>{
    res.send("we");
});//Set up the / root page and what the user would get when they visit the root page

app.listen(1313,()=>console.log("Started at port 1313"));// started up the server at port 1313
