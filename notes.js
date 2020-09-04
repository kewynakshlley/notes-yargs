const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note => note.title === title))
    if(noteToRead){
        console.log(chalk.bgBlue('TITLE') +  ': '+noteToRead.title+'\n'+chalk.bgBlue('CONTENT')+': '+noteToRead.content)
    }else{
        console.log(chalk.bgRed('No note found.'))
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgBlue('MY NOTES'))
    notes.forEach(element => {
        console.log('\nTitle: '+ element.title+'\nContent: '+element.content)
        console.log('-----------------------------------------------------')
    });
}

const addNote = (title, content) =>{
    const notes = loadNotes()
    const duplicatedNote = notes.find((note) => note.title === title)

    if(!duplicatedNote){
        notes.push({
            title: title,
            content: content
        })
        saveNotes(notes)
        console.log(chalk.black.bgGreen('New note added!'))
    }else {
        console.log(chalk.bgRed('Note title alrady exists!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) =>  note.title != title)
    if(notes.length > filteredNotes.length){
        saveNotes(filteredNotes)
        console.log(chalk.black.bgGreen('Note removed.'))
    }else {
        console.log(chalk.bgRed('Note not found.'))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}