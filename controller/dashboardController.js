const mongoose = require("mongoose");

const projects = require('../models/dashboardModels');

const bookingSchema = new mongoose.Schema

const createProject = async (req, res) => {
    const {projectTitle, assignTo, startsOn, endsOn, taskStatus, reportTo} = req.body;
    try {
    const project = await projects.create({
        projectTitle,
        assignTo,
        startsOn,
        endsOn,
        taskStatus, 
        reportTo,
    });
    res.status(200).json(project);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const getProject = (req, res) => {
    res.send("Display a particular Project!");
    console.log(req.method);
}

const getallProject = (req, res) => {
    res.send("Display the all the Projects!");
    console.log(req.method);
}

const deleteProject = (req, res) => {
    res.send("Delete the Projects!");
    console.log(req.method);
}

const updateProject = (req, res) => {
    res.send("Update the Projects!");
    console.log(req.method);
}

module.exports = {createProject, getProject, getallProject, deleteProject, updateProject};