const fs = require('fs');

let fetchNotes = () => {
    try {
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);        
    } catch (error) {
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

   
    let duplicateNotes = notes.filter((note) => note.title === title);
        if(duplicateNotes.length === 0){
            notes.push(note);     
            saveNotes(notes);      
            return note;
        }
    
};


let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title === title);
    return filteredNote;
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNote = notes.filter((notes) => notes.title != title);
    saveNotes(filteredNote);
    return notes.length !== filteredNote.length
};

let logNote = (note) => {
    console.log (`TITLE: - ${note.title} and BODY: - ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote, 
    removeNote,
    logNote
};


