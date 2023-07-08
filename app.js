const express = require("express");

const hbs = require("hbs");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const partial_path = path.join(__dirname, "./views/partials");
app.use(express.static("./public"));
hbs.registerPartials(partial_path);
app.set("view engine", hbs);
app.set("views", "./views");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/coin", (req, res) => {
  const input = req.query.tvwidgetsymbol;
  
  res.render("detailedview.hbs", { src: input });

});

app.get("/login", (req, res) => {
  res.render("login.hbs");
});
app.get("/signup", (req, res) => {
  res.render("signup.hbs");
});
app.get("/forgetpassword", (req, res) => {
  res.render("signup.hbs");
});
app.get("/details", (req, res) => {
  res.render("start_detail.hbs");
});
app.get("/wallet", (req, res) => {
  res.render("wallet.hbs");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard.hbs");
});

app.listen(port);
