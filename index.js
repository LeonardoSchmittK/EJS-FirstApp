const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(5000, () => {
  console.log("Running");
});

app.get("/", (req, res) => {
  res.render("index");
});
