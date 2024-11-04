import { login } from "../../api/auth/login";
import { saveData } from "../../api/storage";
import { Toast } from "../toast/Toast.js";

/**
 * This function should pass data to the login function in api/auth and handle the response
 */

export async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const userData = await login(data);
        const { accessToken, ...profile } = userData.data;
        const toast = new Toast('success', `You were successfully logged in as<br>${profile.name}!`);
        toast.toastIt();
        
        saveData('accessToken', accessToken);
        saveData('profile', profile);
        toast.toastEl.addEventListener('animationend', () => 
            window.location.href = '/profile/'
        );

    } catch (error) {
        console.error('Whoops! An error occurred in the onlogin() function: ', error);
        const toast = new Toast('warning', `Sorry. We couldn't sign you in!`);
        toast.toastIt();
    }
}
