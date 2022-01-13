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

export { addPetition };
