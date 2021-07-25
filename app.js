const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");
const { string, argv } = require("yargs");
// const getNotes = notes();
// console.log(getNotes);
// console.log(chalk.green("Success!"));
yargs.command({
  command: "add",
  description: "Add a notes",
  builder: {
    title: {
      description: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  description: "Removing a  note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "listing all the notes",
  handler: function () {
    notes.listNote();
  },
});

yargs.command({
  command: "read",
  description: "Reading a note.",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: string,
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
