const save = async (user) => {
    // save user to database
    const { username, password } = user;
    try {
        console.log("Usuario creado con exito");
        return username
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { save };