import Note from "../models/noteModel.js";
import asynchandler from "express-async-handler";

const createNote = asynchandler(async (req, res) => {
    const { title, content, category } = req.body;
    
    if(!title || !content || !category) {
        res.status(400);
        throw new Error("Please Fill all the Fields");
    } else {
        const note = new Note({ user: req.user._id, title, content, category });

        const createNote = await note.save();

        res.status(201).json(createNote);
    }
});

export default createNote;
