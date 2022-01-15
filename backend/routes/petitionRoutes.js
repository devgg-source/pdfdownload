import express from "express";
const router = express.Router();

import { addPetition, getPetitions } from "../controller/petitionController.js";

router.route("/").post(addPetition).get(getPetitions);

export default router;
