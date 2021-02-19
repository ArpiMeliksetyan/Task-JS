const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => 'Your notes';


const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(notes => notes.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log("Added a new note")
    } else {
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const jsonData = dataBuffer.toString();
        const data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        return [];
    }

}

const removeNote = (title) => {
    let notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note was found'))
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your note is')),
        notes.forEach((note) => {
            console.log(note.title)
        })
}

const readNotes = (title) => {
    const notes = loadNotes();
    const findNotes = notes.find(note => note.title === title);
    if (findNotes) {
      console.log(findNotes.title, findNotes.body);
    } else{
        console.log(chalk.red.inverse('ERROR'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
};