import { login } from "../../api/auth/login";
// import router from "../../router";

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
        
        console.log(accessToken)
        console.log(profile)

    } catch (error) {
        console.error('Whoops! An error occurred during login: ', error);
    }
}
