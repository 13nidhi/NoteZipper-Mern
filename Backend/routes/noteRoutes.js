import express from "express";
//const getNotes = require("../controllers/notesController");
import getNotes from "../controllers/notesController.js";
import getNotesById from "../controllers/notesController.js";
import UpdateNote from "../controllers/notesController.js";
import DeleteNote from "../controllers/notesController.js";
import createNote from "../controllers/createNoteController.js"
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
//const createNote = require("../controllers/createNoteController");


router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNotesById).put(protect, UpdateNote).delete(protect, DeleteNote);

export default router;