import asyncHandler from "express-async-handler";
import Petition from "../models/petitionModel.js";

//@desc      Create new petition
//@route     POST /api/petitions
//@access    Public
const addPetition = asyncHandler(async (req, res) => {
  const {
    sno,
    petitionerName,
    community,
    aadharNumber,
    smartCardNumber,
    firkka,
    villageName,
  } = req.body;

  const petition = new Petition({
    sno,
    petitionerName,
    community,
    aadharNumber,
    smartCardNumber,
    firkka,
    villageName,
  });

  const createdPetition = await petition.save();
  res.status(201).json(createdPetition);
});

//@desc      Get all petitions
//@route     GET /api/petitions/
//@access    public
const getPetitions = asyncHandler(async (req, res) => {
  const petitions = await Petition.find({});
  res.json(petitions);
});

export { addPetition, getPetitions };
