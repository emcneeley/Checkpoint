import { generateId } from "../Utils/generateId.js";

export class Note {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.noteBody = data.noteBody
        this.date = data.date ? new Date(data.date) : new Date()
        this.user = data.user
        this.updateDate = data.updateDate ? new Date(data.updateDate) : new Date()

    }


    // FIXME add a style tag to the this.name property that will match the color that was selected when the note was created.
    get NoteDataTemplate() {
        return `
       <div class="col-3 rounded elevation-2 text-white flex-column m-5 " onclick="app.notesController.setActive('${this.id}')">
        <p>${this.name}</p>
        <p>${this.ComputeDate}</p>

      </div>
      `
    }


    // FIXME show both the created at date and the updated date on the active note
    get ActiveTemplate() {
        return `
        <p> Created on: ${this.ComputeDate}</p>
        <p> Updated at: ${this.ComputeUpdateDate}</p>
        <div class="col-8 ">
        <textarea class="w-100" name="noteBody" id="noteBody" cols="30"
        rows="10">${this.noteBody}</textarea>
       <div>
        <button class=" w-25 btn btn-primary" onclick="app.notesController.saveNote('${this.id}')">
                <i class=" mdi mdi-content-save"></i>
              </button>
              <button class=" w-25 btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')">
                <i class=" mdi mdi-trash-can"></i>
              </button>
        </div>
      </div>`
    }

    get ComputeDate() {
        let date = this.date
        return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())
    }

    get ComputeUpdateDate() {
        let updateDate = this.updateDate
        return (updateDate.getMonth() + 1) + '/' + (updateDate.getDate()) + '/' + (updateDate.getFullYear()) + ' ' + (updateDate.getHours()) + ':' + (updateDate.getMinutes()) + ':' + (updateDate.getSeconds())

    }
}