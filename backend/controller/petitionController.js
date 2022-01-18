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

//@desc      Get petition by id
//@route     GET /api/petitions/:id
//@access    public
const getPetitionById = asyncHandler(async (req, res) => {
  const petition = await Petition.findById(req.params.id);

  if (petition) {
    res.json(petition);
  } else {
    res.status(404);
    throw new Error("Petition not found");
  }
});

//@desc      Delete a petition
//@route     DELETE /api/petitions/:id
//@access    Public
const deletePetitionById = asyncHandler(async (req, res) => {
  const petition = await Petition.findById(req.params.id);

  if (petition) {
    await petition.remove();
    res.json({ message: "Petition removed" });
  } else {
    res.status(404);
    throw new Error("Petition not found");
  }
});

//@desc      Update petition
//@route     PUT /api/petitions/:id
//@access    public
const updatePetitionById = asyncHandler(async (req, res) => {
  const petition = await Petition.findById(req.params.id);

  if (petition) {
    petition.sno = req.body.sno || petition.sno;
    petition.petitionerName =
      req.body.petitionerName || petition.petitionerName;
    petition.community = req.body.community || petition.community;
    petition.aadharNumber = req.body.aadharNumber || petition.aadharNumber;
    petition.smartCardNumber =
      req.body.smartCardNumber || petition.smartCardNumber;
    petition.firkka = req.body.firkka || petition.firkka;
    petition.villageName = req.body.villageName || petition.villageName;

    const updatedPetition = await petition.save();

    res.json({
      _id: updatedPetition._id,
      petitionerName: updatedPetition.petitionerName,
      community: updatedPetition.community,
      aadharNumber: updatedPetition.aadharNumber,
      smartCardNumber: updatedPetition.smartCardNumber,
      firkka: updatedPetition.firkka,
      villageName: updatedPetition.villageName,
    });
  } else {
    res.send(404);
    throw new Error("User not found");
  }
});

const deleteAll = asyncHandler(async (req, res) => {
  try {
    await Petition.deleteMany();
    res.json({ message: "Deleted successfully.." });
  } catch (err) {
    res.send(404);
    throw new Error("Cant delete");
  }
});

export {
  addPetition,
  getPetitions,
  deletePetitionById,
  updatePetitionById,
  getPetitionById,
  deleteAll,
};
