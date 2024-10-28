import { API_AUTH_LOGIN } from "../constants.js";

/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} data - The login data.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to the user's login response.
 * @throws {Error} Error if the login fails.
 */

export async function login({ email, password }) {
    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password,
            })
        })

        if (!response.ok) {
            const errorMsg = await response.json()
            throw new Error(`Network response was not ok: ${response.status} - ${errorMsg.message}`);
        } else {
            const data = await response.json();
            console.log("this data has been passed to local storage: ", data)
            return data;
        }

    } catch (error) {
        console.error('There was a problem with your login: ', error);
        throw error;
    }
}
