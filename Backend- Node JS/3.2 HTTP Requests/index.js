import express from "express";
/*http://localhost:3000 */
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    /*console.log(req.rawHeaders);*/
    res.send("<h1>Home page</h1>");
});

app.get("/contact",(req, res) => {
    res.send("<h1>contact me</h1><p> Naama.antoniouk@gmail.com</p>");
});

app.get("/about",(req, res) => {
    res.send("<p>Hey this is me, i love me some ramen and sushi !</p>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });