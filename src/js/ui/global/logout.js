import { onLogout } from "../auth/logout.js";

/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */
export function setLogoutListener(el) {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        onLogout();
    })
}
