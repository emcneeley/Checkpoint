import { appState } from "../AppState.js";


class UserService {

    enterUserName(input) {
        appState.user = input
        console.log('appstate user', appState.user)
    }

}

export const userService = new UserService()