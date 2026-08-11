import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import Post from "./models/Post.js";

const app = express();
app.use(cors());
app.use(express.json());
// connectDB();

app.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.get("/api/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

app.post("/api/posts", async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

app.put("/api/posts/:id", async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPost);
});

app.delete("/api/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));