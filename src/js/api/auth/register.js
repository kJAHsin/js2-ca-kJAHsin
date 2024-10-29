import { API_AUTH_REGISTER } from "../constants.js";

/**
 * Registers a new user with the provided details.
 *
 * @param {Object} data - The registration data.
 * @param {string} data.name - The user's name (required).
 * @param {string} data.email - The user's email address (required).
 * @param {string} data.password - The user's password (required).
 *
 * **OPTIONAL VALUES**
 *
 * @param {string} [data.bio] - A brief biography of the user (optional).
 * @param {Object} [data.avatar] - The user's avatar information (optional).
 * @param {string} [data.avatar.url] - URL for the user's avatar image.
 * @param {string} [data.avatar.alt] - Alt text for the user's avatar image.
 * @param {Object} [data.banner] - The user's banner information (optional).
 * @param {string} [data.banner.url] - URL for the user's banner image.
 * @param {string} [data.banner.alt] - Alt text for the user's banner image.
 * @param {boolean} [data.venueManager] - Indicates if the user is a venue manager (optional, used for holidaze).
 * @returns {Promise<Object>} A promise that resolves to the user's registration response.
 */
export async function register({
  name,
  email,
  password,
  bio,
  avatar,
  banner,
  venueManager,
}) {
  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        ...(bio && { bio }),
        ...(avatar && { avatar }),
        ...(banner && { banner }),
        ...(venueManager !== undefined && { venueManager }),
      }),
    });

    if (!response.ok) {
      const errorMsg = await response.json();
      throw new Error(`Network response was not ok: ${response.status} - ${errorMsg.status} - ${errorMsg.errors[0].message}`);
    }

    const data = await response.json();
    console.log('User registered successfully: ', data);
    return data;
  } catch (error) {
    console.error('There was a problem with the registration: ', error);
    throw error;
  }

}
