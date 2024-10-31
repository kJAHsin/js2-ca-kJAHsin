import { login } from "../../api/auth/login";
import { saveData } from "../../api/storage";
import router from "../../router";

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
        
        saveData('accessToken', accessToken);
        saveData('profile', profile);

        alert(`You were successfully logged in as ${profile.name}!`);
        router('/profile/');
        window.location.href = '/profile/';
    } catch (error) {
        console.error('Whoops! An error occurred in the onlogin() function: ', error);
    }
}
