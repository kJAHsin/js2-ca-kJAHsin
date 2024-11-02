import { onLogout } from "../auth/logout.js";

/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */
export function setLogoutListener() {
    const logOutBtn = document.getElementById('logOutBtn');

    logOutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onLogout();
    })
}
