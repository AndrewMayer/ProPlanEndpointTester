//Connect to mongodb "protrack-app"

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/protrack-app', { useNewUrlParser: true });

const protrackSchema = new mongoose.Schema({
	name: String,
	duedate: String,
	status: String,

})

// This is creating (or opening) the ProTrack schema that has all the methods attached.
// Collection name will be Milestones
const Milestone = mongoose.model("Milestone", protrackSchema);


Milestone.create({
	name: "Test6",
 	duedate: "03/25/2019",
 	status: "on-time",
}, (err,newMStone) => {
	if (err) {
		console.log(`An ERROR has occured`);
	} else {
		console.log(newMStone);
	}
});