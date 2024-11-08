const express = require("express");
const router = express.Router();

const {createProject, getallProject, getProject, deleteProject, updateProject} = require("../controller/dashboardController");


router.get("/projects", getallProject);

router.get("/projects/:id", getProject);

router.post("/projects", createProject);

router.patch("/projects/:id", updateProject);

router.delete("/projects/:id", deleteProject);

module.exports = router;