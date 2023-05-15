import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"

function _saveNotes() {
    saveState('notes', appState.notes)
}


class NotesService {
    deleteNote(noteId) {
        let noteToDelete = appState.notes.find(n => n.id == noteId)
        appState.notes = appState.notes.filter(n => n.id != noteId)
        _saveNotes()
    }

    createNotes(formData) {
        let newNote = new Note(formData)
        console.log('THIS IS MY NEW NOTE', formData)
        appState.notes.push(newNote)
        _saveNotes()
        // @ts-ignore
        // appState.activeNote = newNote
        appState.emit('notes')



    }

    // FIXME be sure to pass the noteBody to the service
    // then update the updatedDate and set it to a new date
    // then set the activeNote.noteBody to  the noteBody that was passed to the service
    // be sure to call your saveNotes function at the end so that it persists in local storage
    saveNote(noteBody) {
        let activeNote = appState.activeNote
        // @ts-ignore
        activeNote.noteBody = noteBody
        // console.log('This is my active report', activeNote)
        appState.emit('activeNote')
        _saveNotes()
    }

    setActive(noteId) {
        let foundNote = appState.notes.find(n => n.id == noteId)
        appState.activeNote = foundNote

    }

}

export const notesService = new NotesService()