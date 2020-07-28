const express = require("express");


const app = express();
app.use(express.json());
var PORT = process.env.PORT || 5000;







app.get("/",function(req,res) {
    res.send("You are on the homepage");
});


app.post("/post",(req,res) =>{
    
    console.log(req.body);
res.send("Welcome " + req.body.user);

});

app.delete("/delete",(req,res) =>{
    
    console.log(req.body);
res.send(req.body.taskid+"{delete: true}");

});

app.put("/put/:Id",(req,res) =>{
    
    
res.send("Task " + req.params.Id + " has been updated");

});



app.listen(PORT,function(){
    console.log("Server running on port: ", PORT);
})