import express from "express";
const router = express.Router();

import { addPetition } from "../controller/petitionController.js";

router.route("/").post(addPetition);

export default router;
