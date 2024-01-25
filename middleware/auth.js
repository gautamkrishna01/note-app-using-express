const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTEAPI"

const auth = (req, resp, next) => {
    try {
        let token = req.header.authorization;
        if (token) {
            token = token.split(" ")(1);
            let user = jwt.verify(token, SECRET_KEY)
            req.userId = user.id
        } else {
            resp.status(401).json({ message: "Unauthorized user" })
        }
        next()
    } catch (error) {
        console.log(error)
        resp.status(401).json({ message: "Unauthorized User" })

    }
}
module.exports = { auth }