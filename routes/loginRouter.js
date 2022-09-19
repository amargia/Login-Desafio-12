const { Router } = require("express");
const loginController = require("../controller/loginController");
const loginRouter = Router();

const loginContainer = require("../controller/loginController");

function authorize(req, res, next) {
  if (req.session.user === "admin") {
    return next();
  } else {
    res.status(401).send("No estas autorizado");
  }
}

loginRouter.get("/", (req, res) => {
    res.render("login");
});

loginRouter.post("/", (req, res) => {
  const { username } = req.body
  loginContainer.save({username}) 
  .then ((user) => {
    if (user) {
      req.session.user = user;      
      res.redirect('/');
    } else {
      res.send('Usuario o contraseña incorrectos');
    }      
  })
});

loginRouter.get("/privada" , authorize , (req, res) => {
    res.render("Ruta privada");
});

module.exports = loginRouter;