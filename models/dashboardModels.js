const mongoose = require('mongoose');
const type = require('mongoose/lib/schema/operators/type');

const Schema = mongoose.Schema

const projects = new Schema({
    projectTitle: {
        Type: String,
        required: true
    },
    assignTo: {
        Type: String,
        required: true
    },
    taskStatus: {
        Type: String,
        required: true
    },
    reportTo: {
        Type: String,
        required: true
    },
    startsOn: {
        Type: Date,
        default: () => Date.now()
    },
    endsOn: {
        Type: Date,
        default: () => Date.now()
    }
});

const dashboardSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('projects', projects)