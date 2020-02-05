var path=require("path");

module.exports=function(app){

app.get("/htmlforhotel",function(req,res){

res.sendFile(path.join(_dirname,"../public/htmlforhotel.html"));});
}

app.get("/htmlforflight",function(req,res){

    res.sendFile(path.join(_dirname,"../public/htmlforflight.html"));});
    
app.get("/htmlforcarrental",function(req,res){

    res.sendFile(path.join(_dirname,"../public/htmlforcarrental.html"));});

    // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

 
