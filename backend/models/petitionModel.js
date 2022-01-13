import mongoose from "mongoose";

const petitionSchema = mongoose.Schema(
  {
    sno: {
      type: number,
      required: true,
    },
    petitionername: {
      type: String,
      required: true,
    },
    community: {
      type: String,
      required: true,
    },
    aadharno: {
      type: String,
      required: true,
    },
    smartcardno: {
      type: String,
      required: true,
    },
    firkka: {
      type: String,
      required: true,
    },
    villagename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Petition = mongoose.model("Petition", petitionSchema);

export default Petition;
