const express = require("express");
const app = express();
app.set("view engine", "ejs")

function get_day_of_week(date){
   var get_day_of_week = ["sunday", "Mondey","Thusdey","Wendsdey","Thursday","Friday","Saturday"];

    return get_day_of_week[date.getDay()];
    }

    app.get("/birthday", function(req,res){
    var birthday = new Date(2002,6,16);
    //res.send(get_day_of_week(today));
    res.render('day_of_week',{
        date: birthday, 
        day_of_week: get_day_of_week(birthday)});
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});