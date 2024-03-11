/* eslint-disable no-unused-vars */
import express from "express";
import { agregar } from "../controllers/notesController.js";

const router = express.Router();

router.post("/", agregar);

export default router;
