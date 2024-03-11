import mongoose from "mongoose";

const sectionSchema = mongoose.Schema(
  {
    students: {
      type: Object,
    },
    section: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model("Section", sectionSchema);

export default Section;
