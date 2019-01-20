import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  content: String
});

let PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
