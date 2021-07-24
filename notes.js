const chalk = require("chalk");
const fs = require("fs");

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToSave = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notesToSave == true) {
    saveNotes(notesToSave);
    console.log(chalk.bgGreen("Note removed !"));
  } else {
    console.log(chalk.bgRed("No note found !"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
