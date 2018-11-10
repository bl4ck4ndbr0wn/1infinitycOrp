import { Router } from "express";
import { Article } from "../models";

export default () => {
  let router = Router();

  // @route   GET api/article/test
  // @desc    Tests article route
  // @access  Public
  router.get("/test", (req, res) => res.json({ msg: "Article Works" }));

  // @route   GET api/article
  // @desc    Get article
  // @access  Public
  router.get("/", (req, res) => {
    Article.find()
      .sort({ date: -1 })
      .then(article => res.json(article))
      .catch(err =>
        res.status(404).json({ noarticlefound: "No article found" })
      );
  });

  // @route   GET api/article/:id
  // @desc    Get article by id
  // @access  Public
  router.get("/:id", (req, res) => {
    Article.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err =>
        res
          .status(404)
          .json({ noarticlefound: "No article found with that ID" })
      );
  });

  return router;
};
