// ejs is a pakage embedded javascript templete //
//  1 npminit -y 2-express install 3- npm i ejs 4-yek folder banayenge views and uske under name.ejs file bana rahe honge
const express=require("express");
const app=express();
const port =8080;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.listen(port,()=>{
    console.log("listing to port");
})
// 2line aur add hoga agar dusre directirory se server on hua to //
const path=require("path");
app.set("views",path.join(__dirname,"/views"));


