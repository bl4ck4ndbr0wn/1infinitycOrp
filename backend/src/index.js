import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";

import demux from "./services/demux";
import io from "./utils/io";

import user from "./routes/user";
import profile from "./routes/profile";
import article from "./routes/article";

let app = express();

app.use(cors());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./utils/passport")(passport);

// Use Routes
app.use("/api/users", user());
app.use("/api/profile", profile());
app.use("/api/article", article());

const server = app.listen(process.env.PORT, () =>
  console.info(`News Dapp listening on port ${process.env.PORT}!`)
);

io.connect(server);

demux.watch();
