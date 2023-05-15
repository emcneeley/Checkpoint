import { userService } from "../Services/UserService.js";
import { Pop } from "../Utils/Pop.js";


export class UserController {
    constructor() {
        // this.loadUser()
        // let userName = window.prompt("Who will be using JOT. Today?")
        // userService.enterName(userName)
        // if (!userName) {
        //     return window.alert('ENTER A NAME')
        // }
        // let userName = window.prompt('Who will be using Jot. Today?')
        // usersService.setUser(userName)
        this.enterUserName()
    }

    async enterUserName() {
        let input = await Pop.prompt("Enter your name por favor")
        if (!input) {
            return Pop.error('please enter a valid name')
        }
        userService.enterUserName(input)
    }


    // async loadUser() {
    //     let input = await Pop.prompt('please enter your name')
    //     userService.loadUser(input)
    // }
}






