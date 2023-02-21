import Note from "../models/noteModel.js";
import asynchandler from "express-async-handler";
//const Note = require("../models/noteModel");
//const asynchandler =  require('express-async-handler');

const getNotes = asynchandler(async (req, res) => {
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
});

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

const getNotesById = asynchandler(async (req, res) => {
    const note = await Note.findById(req.param.id);

    if(note) {
        res.json(note);
    } else {
        res.status(404).json({message: "Note Found"});
    }
})

const UpdateNote = asynchandler(async (req, res) => {
    const { title, content,category } = req.body;

    const note = await Note.findById(req.params.id);

    if(note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("you can't perform this action"); 
    }

    if (note) {
        note.title = title;
        note.content = content;
        note.category = category;

        const UpdateNote = await note.save();
        res.json(updatedNote);
    } else {
        res.json(404);
        throw new Error("Note nor Found");
    }
})

const DeleteNote = asynchandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if(note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("you can't perform this action"); 
    }

    if(note) {
        await note.remove();
        res.json({message: "Note Removed"})
    } else {
        res.status(404);
        throw new Error("Note Not found");
    }
    
})

export default {getNotes, getNotesById, UpdateNote, DeleteNote};

