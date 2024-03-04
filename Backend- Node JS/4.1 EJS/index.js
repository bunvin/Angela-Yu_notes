import express from "express";
const app = express();
const port = 3000;

var currentdate = new Date();
var currentday = currentdate.getDay()+1;

console.log(currentday);

app.get("/", (req, res) => {
    if (currentday <= 5) {
        res.send("<h1>Hey ! it's a week day !</h1>");
    }
    else {
        res.send("<h1>Hey! it's the weekend !</h1>");}
  });  



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
 });