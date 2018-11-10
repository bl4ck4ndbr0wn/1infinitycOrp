import mongoose from "mongoose";

const { Schema } = mongoose;

let User = null;

try {
  const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    role: {
      type: String,
      default: "writer",
      enum: ["writer", "verifier", "admin"]
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  User = mongoose.model("users", UserSchema);
} catch (e) {
  User = mongoose.model("users");
}

export default User;
