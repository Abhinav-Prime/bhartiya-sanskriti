import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    requird: true,
  },
  date: {
    type: Date,
    default: date.now,
  },
  likes: {
    type: String,
    default: "",
  },
  likesCount: {
    type: String,
    default: 0,
  },
  comments: [
    {
      profileImage: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
const blogModel = mongoose.model("blog", blogSchema);
export { blogModel };
