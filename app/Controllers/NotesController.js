import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { Note } from "../Models/Note.js"

function _drawNotes() {
    // console.log('THIS IS MY NOTE')
    let notes = appState.notes
    let template = ''
    notes.forEach(n => template += n.NoteDataTemplate)
    setHTML('notes-data', template)
}

function _drawActiveNote() {
    let activeNote = appState.activeNote

    // @ts-ignore
    setHTML('activeNote', activeNote.ActiveTemplate)
}










export class NotesController {
    constructor() {
        // _drawNotes()
        appState.on('user', _drawNotes)
        appState.on('notes', _drawNotes)
        appState.on('activeNote', _drawActiveNote)
    }

    getNotes() {
        _drawNotes()
    }

    setActive(noteId) {
        notesService.setActive(noteId)
    }

    saveNote() {
        let note = document.getElementById('noteBody')
        // @ts-ignore
        let noteBody = note.value
        // @ts-ignore
        notesService.saveNote(noteBody)
    }


    createNote() {
        // @ts-ignore
        window.event.preventDefault()
        // console.log('THIS IS MY NEW NOTE')
        // @ts-ignore
        let form = event.target
        let formData = getFormData(form)
        // @ts-ignore
        // console.log('this is my form data', formData)
        notesService.createNotes(formData)
        // @ts-ignore
        form.reset()
    }



    async deleteNote(noteId) {
        console.log('delete note', noteId)
        if (await Pop.confirm('Do you want to delete this note?')) {
            notesService.deleteNote(noteId)
        }
    }


}