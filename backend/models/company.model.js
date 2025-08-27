import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
      match: [
        /^https?:\/\/[^\s$.?#].[^\s]*$/,
        "Please enter a valid website URL",
      ],
    },
    location: {
      type: String,
      trim: true,
    },
    logo: {
      type: String,
      trim: true,
      default: "https://via.placeholder.com/150",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
