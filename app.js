const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname +"/date.js");

const app = express();

let items=[];
let workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {


  let day=date.getDate();

  res.render("list", {
    listTitle: day, newListItems: items
});

  app.post("/",function(req,res){
    let item=req.body.newItem;

    if(req.body.list == "Work"){
      workItems.push(item);
      res.redirect("/work");
    }else{
      items.push(item);
       res.redirect("/");
    }
  });


});

app.get("/work",function(req,res){
  res.render("list",{listTitle: "Work List",newListItems: workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});



app.listen(3000, function() {

  console.log("Server is running on port 3000");
});








//var currentDay = today.getDay();
// var day = "";
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     console.log("Error current day is equal to : " + currentDay);
// }
// <%  if(kindOfDay === "Saturday" || kindOfDay === "Sunday" ){ %>
//       <h1 style ="color : Purple "><%=kindOfDay%> ToDoList</h1>
// <%   }else{  %>
//       <h1 style ="color : Blue "><%=kindOfDay%> ToDoList</h1>
//   <%  } %>

// app.post("/work",function(req,res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// })
