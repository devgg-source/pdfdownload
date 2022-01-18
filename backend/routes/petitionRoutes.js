import express from "express";
const router = express.Router();

import {
  addPetition,
  deletePetitionById,
  getPetitions,
  updatePetitionById,
  getPetitionById,
  deleteAll,
} from "../controller/petitionController.js";

router.route("/").post(addPetition).get(getPetitions);
router
  .route("/:id")
  .delete(deletePetitionById)
  .put(updatePetitionById)
  .get(getPetitionById);

router.route("/deleteAll").post(deleteAll);

export default router;
