import { createPost } from "../../api/post/create.js";

/**
 * Passes data to the createPost function in api/post and handles the response
 */

export async function onCreatePost(e) {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData.entries());

    const data = {
        title: 'Test post with beans on it!',
        body: 'This is the body with some text for testing.',
    }

    try {
        const response = await createPost(data);
        if (response) {
            // Handle succcessful creation of post
            console.log(`Way to go! You created the post ${data.title}`);
            // TO DO
            // Add toast and redirect
        }
    } catch (err) {
        console.error('Could not create post', err);
    }

}
