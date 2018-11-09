import { Router } from "express";
import { Article } from "../models";

export default () => {
  let router = Router();

  // @route   GET api/article/test
  // @desc    Tests article route
  // @access  Public
  router.get("/test", (req, res) => res.json({ msg: "Article Works" }));

  return router;
};
