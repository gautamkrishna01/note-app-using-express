const express = require("express");
const { default: mongoose } = require("mongoose");
const userRouter = require("./router/userRouter");
const app = express();
const PORT = 8000;




//middleware
app.use(express.json())

//router
app.use("/users", userRouter)
app.use("/notes", noteRoutes)




//connecting database
mongoose.connect('mongodb://127.0.0.1:27017/note', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connecting the database")
}).catch((error) => {
    console.log("cannot connect the database")
});

app.listen(PORT, () => {
    console.log(`Listing the port ${PORT}`)
})