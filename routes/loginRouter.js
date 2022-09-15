const { Router } = require("express");
const loginRouter = Router();

const loginContainer = require("../controller/loginController");

function authorize(req, res, next) {
  if (req.session.user === "admin") {
    next();
  } else {
    res.status(401).send("No estas autorizado");
  }
}

loginRouter.get("/", authorize, (req, res) => {
    res.render("login");
});

loginRouter.post("/", async (req, res) => {
    const { username } = req.body;
    const user = loginContainer.save({ username });
    if (user) {
        req.session.user = user;
        res.redirect("/");
    } else {
        res.status(401).send("Usuario o contraseña incorrectos");
    }
});

loginRouter.get("/privada" , authorize , (req, res) => {
    res.render("Ruta privada");
});

module.exports = loginRouter;