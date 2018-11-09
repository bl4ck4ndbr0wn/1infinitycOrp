import mongoose from "mongoose";

const { Schema } = mongoose;

let Article = null;

try {
  const ArticleSchema = new Schema({
    _id: {
      timestamp: Number,
      author: String
    },
    author: String,
    title: String,
    content: String,
    tag: String,
    likes: {
      type: Number,
      default: 0
    },
    articleConfirmed: {
      type: Boolean,
      default: false
    }
  });
  Article = mongoose.model("Article", ArticleSchema);
} catch (e) {
  Article = mongoose.model("Article");
}

export default Article;
