import mongoose from "mongoose";

export const pillSchema = new mongoose.Schema({
  pillId: {
    type: Number,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  pickCount: {
    type: Number,
    required: true,
  },
  replaceCount: {
    type: Number,
    required: true,
  },
});

const Pill = mongoose.model("Pill", pillSchema);

export default Pill;
