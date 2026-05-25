const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../../util/multer");

const ThemeController = require("./theme.controller");
const upload = multer({
  storage,
});

const checkAccessWithKey = require("../../checkAccess");

router.patch("/setDefaultTheme", checkAccessWithKey(), ThemeController.setDefaultTheme);

router.get("/", checkAccessWithKey(), ThemeController.index);

router.post("/", checkAccessWithKey(), upload.any(), ThemeController.store);

router.patch("/:themeId", checkAccessWithKey(), upload.single("theme"), ThemeController.update);

router.delete("/:themeId", checkAccessWithKey(), ThemeController.destroy);

module.exports = router;
