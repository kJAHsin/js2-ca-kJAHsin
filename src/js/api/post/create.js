import { API_SOCIAL_POSTS } from "../constants.js";
import { headers } from "../headers.js";

/**
 * Creates a new post by sending the data to the API.
 *
 * @param {Object} data - The post parameters.
 * @param {string} data.title - The title of the post (required).
 * @param {string} [data.body] - The body of the post (optional).
 * @param {string[]} [data.tags] - Array of tags associated with the post (optional).
 * @param {Object} [data.media] - Media object containing URL and alt text (optional).
 * @param {string} [data.media.url] - The URL of the media (optional).
 * @param {string} [data.media.alt] - Alt text for the media (optional).
 * @returns {Promise<Object>} The created post data from the API.
 * @throws {Error} If the API request fails.
 */
export async function createPost({ title, body, tags, media }) {
    try {
        const response = await fetch(API_SOCIAL_POSTS, {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify({
                ...(title && { title }),
                ...(body && { body }),
                ...(tags && { ...tags }),
                ...(media && {
                    media: {
                        ...(media.url && { url: media.url }),
                        ...(media.alt && { alt: media.alt }),
                    }
                }),
            })
        })

        if (!response.ok) {
            const errorMsg = await response.json();
            throw new Error(`Network response for creating post not ok: ${response.status} - ${errorMsg.status} - ${errorMsg.errors[0].message}`)
        }

        const data = await response.json();
        console.log('Post created successfully: ', data);
        return data;
    } catch (err) {
        console.error('There was a problem creating your post: ', err);
        throw err;
    }
}
