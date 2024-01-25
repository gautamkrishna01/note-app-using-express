const noteModel = require("../model/noteModel");

const createNote = async (req, resp) => {
    const { title, description } = req.body;
    const newNote = new noteModel({ title: title, description: description, userId: req.userId })
    try {
        await newNote.save()
        resp.status(201).json({ message: newNote })
    } catch (error) {
        console.log(error)
        resp.status(500).json({ message: "Somethings went wrong" })

    }

}

const updateNote = async (req, resp) => {
    const id = req.params.id;
    const { title, description } = req.body;
    const newNotes = {
        title: title,
        description: description,
        userId: userId
    }
    try {
        await noteModel.findByIdAndUpdate(id, newNotes, { new: true });
        resp.status(200).json(newNotes)

    } catch (error) {
        console.log(error)
        resp.status(500).json({ message: "Somethings went wrong" })

    }

}

const deleteNote = async (req, resp) => {
    const id = req.params.id;
    try {
        const note = await noteModel.findByIdAndRemove(id);
        resp.status(202).json(note)

    } catch (error) {
        console.log(error)
        resp.status(500).json({ message: "Somethings went wrong" })

    }

}

const getNote = async (req, resp) => {
    try {
        const notes = await noteModel.find({ userId: req.userId });
        resp.status(200).json(notes)

    } catch (error) {
        console.log(error)
        resp.status(500).json({ message: "Somethings went wrong " })

    }

}

module.exports = { createNote, updateNote, deleteNote, getNote }