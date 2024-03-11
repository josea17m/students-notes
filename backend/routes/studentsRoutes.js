import express from "express";
import { obtener } from "../controllers/notesController.js";

const router = express.Router();

router.get("/:section", obtener);

export default router;
