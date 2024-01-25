const express = require("express");
const { getNote, createNote, updateNote, deleteNote } = require("../controller/noteController");
const { auth } = require("../middleware/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNote)
noteRouter.post("/", auth, createNote)
noteRouter.post("/:id", auth, deleteNote)
noteRouter.post("/:id", auth, updateNote)