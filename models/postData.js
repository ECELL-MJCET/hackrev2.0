"use strict";
import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
    },

    TeamLead: {
      name: {
        type: String,
        required: true,
      },
      college: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      rollno: {
        type: String,
        required: true,
      },
      

      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
    },
    member1: {
      name: {
        type: String,
        required: true,
      },
      rollno: {
        type: String,
        required: true,
      },
    },
    member2: {
      name: {
        type: String,
        required: true,
      },
      rollno: {
        type: String,
        required: true,
      },
    },
    member3: {
      name: {
        type: String,
        required: true,
      },
      rollno: {
        type: String,
        required: true,
      },
    },
    member4: {
      name: {
        type: String,
      },
      rollno: {
        type: String,
      },
    },
    member5: {
      name: {
        type: String,
      },
      rollno: {
        type: String,
      },
    },
    tracks: {
      type: String,
      required: true,
    },
    abstract: {
      type: Buffer,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.postData ||
  mongoose.model("postData", postSchema);
