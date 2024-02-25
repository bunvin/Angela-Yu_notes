import express from "express";
/* 
create a server app
*/
const app = express()
const port = 3000 /* http://localhost:3000/ */

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
})