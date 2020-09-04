const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

const log = console.log;

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
        content: {
            describe: 'Note content',
            type: 'string',
            demandOption: true

        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.content)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note what will be removed.',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of the note that you want to read.',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.parse()

