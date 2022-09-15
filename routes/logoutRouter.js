const { Router } = require("express");
const logoutRouter = Router();

logoutRouter.get("/", (req, res) => {
    const user = req.session.user;
    req.session.destroy();
    if (!error) {
        res.render("logout", { user });
    } else {
        res.status(500).send("Error al cerrar sesión");
    }
});

module.exports = logoutRouter;