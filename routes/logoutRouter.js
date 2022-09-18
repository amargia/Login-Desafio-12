const { Router } = require("express");
const logoutRouter = Router();

logoutRouter.get("/", (req, res) => {
    const user = req.session.user;
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send("Error al cerrar sesión");
        } else {
            res.render("logout", { user });
        }
    });
});

module.exports = logoutRouter;