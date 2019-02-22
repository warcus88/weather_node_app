const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}

const bodyOptions =  {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add','Add anew note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove','Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    let noteInfo = notes.addNote(argv.title,argv.body)
    if(_.isUndefined(noteInfo)){
        console.log('Such note already exists')
    } else {
        console.log(`Note was added title is`);
        notes.logNote(noteInfo);
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(allNotes);
    console.log(`Priniting all notes ${allNotes.length} note(s).`);
    allNotes.forEach((el) => {
        notes.logNote(el);
    });
} else if (command === 'read') {
    let noteInfo = notes.getNote(argv.title);
    if(noteInfo){
        console.log('Note Found');
        notes.logNote(noteInfo[0]);
    } else{
        console.log('Note not found');
    }
   
} else if (command === 'remove') {
   let noteRemoved = notes.removeNote(argv.title);
   let message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
} else {
    console.log('Command not recognized')
}

