const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTEAPI";

const signup = async (req, resp) => {
    const { username, password, email } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return resp.status(400).json({ message: "User already exit" })
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await userModel.create({ email: email, password: hashedPassword, username: username })

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY)
        resp.status(201).json({ user: result, token: token })

    } catch (error) {
        resp.status(500).json({ message: "Somethings went wrong" })

    }

}


const signIn = async (req, resp) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email })
        if (!existingUser) {
            return resp.status(401).json({ message: "User not found" })
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            return resp.status(400).json({ message: "Invalidate Credential" })
        }
        const token = jwt.sign({ email: existingUser.email, id: result._id }, SECRET_KEY)
        resp.status(201).json({ user: existingUser, token: token })

    } catch (error) {
        resp.status(500).json({ message: "Somethings went wrong" })

    }

}

module.exports = { signup, signIn }

