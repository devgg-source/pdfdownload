import mongoose from "mongoose";

const petitionSchema = mongoose.Schema(
  {
    sno: {
      type: Number,
      required: true,
    },
    petitionerName: {
      type: String,
      required: true,
    },
    community: {
      type: String,
      required: true,
    },
    aadharNumber: {
      type: String,
      required: true,
    },
    smartCardNumber: {
      type: String,
      required: true,
    },
    firkka: {
      type: String,
      required: true,
    },
    villageName: {
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
