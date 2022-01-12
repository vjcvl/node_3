const express = require("express");
const app = express();

app.use(express.json());

let room = [];
let user = [];
app.post("/create-room",(req,res)=>{
     console.log(req.body);
     req.body.Roomid = room.length + 1
     room.push(req.body);
     res.json({"note" : req.body.Roomid})
     
 })

 app.post("/create-user",(req,res)=>{
     req.body.userId = user.length + 1;
     user.push(req.body);
     res.json({"text":req.userId})    
 })

app.get("/",(req,res)=>{
   
    res.json(user);
    
})

app.get("/user",(req,res)=>{
    let final = user.map((status,...remove)=>remove)
    res.json(final)
})

app.listen(3000);