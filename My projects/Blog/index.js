import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    pos1_title: post1.title,
    pos1_post: post1.post,
    pos1_timePost: post1.timePosted,
    pos2_title: post2.title,
    pos2_post: post2.post,
    pos2_timePost: post2.timePosted,}
    ) 
  });

app.post("/add", (req, res) => {
    res.render("add.ejs");
  });

  app.post("/edit", (req, res) => {
    res.render("edit.ejs");
  });

  //here

  app.post("/submit", (req, res) => {
    const nameLength = req.body['new_title'] + req.body["new_post"] + req.body["new_timePost"];
    res.render("edit.ejs", {title : req.body['new_title']});
    console.log(`${req.body['new_title']}`)
  });



var post1 = {
    title: "orc meeting",
    post: "the meeting was so interesting to watch, I'm glad I spied on them. the meeting was so interesting to watch, I'm glad I spied on them",
    timePosted: new Date(2020,10,29,10,33).toDateString()
}
app.listen(port, () => {
    console.log(`Listening on port ${port}, ${post1["title"]}`);
  });

var post2 = {
    title: "orc meeting",
    post: "Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.",
    timePosted: new Date(2019,10,29,10,33).toDateString()
}

var post3 = {
    title: "orc meeting",
    post: "Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.",
    timePosted: new Date(2020,10,29,10,33).toDateString()
}