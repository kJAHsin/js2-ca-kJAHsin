import { setLogoutListener } from "../logout.js";

export class LogoutButton {
    constructor (text, style) {
        this.text = text;
        this.style = style;

        this.setListener();
    }

    // attach listener for logout function
    setListener = () => setLogoutListener();
}