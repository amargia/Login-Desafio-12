const { Router } = require("express");
const home = Router();

const Contenedor = require("../controller/productsController")

home.get("/", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.render("home", { user: user });
  } else {
    res.render("login");
  }
});

module.exports = home;