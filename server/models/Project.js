const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  /*
projectId: {
  type: String,
  required: true,
},*/
  projectCreator: {
    type: String,
    required: true,
    trim: true,
  },
  discord: {
    type: String,
  },
  goFundMe: {
    type: String,
  }
});

//I needed this to test, this needs to be changed for final build
const Project = model('Project', projectSchema);

module.exports = Project;