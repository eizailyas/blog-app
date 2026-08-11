import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: String, 
  author: String, 
  tags: String,
  summary: String, 
  body: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Post", postSchema);