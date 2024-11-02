/**
 * Dynamically loads the appropriate JavaScript file based on the current page's pathname.
 * This function facilitates page-specific script loading in a Vite project,
 * ensuring only the required scripts are loaded for each route.
 * 
 * @param {string} [pathname=window.location.pathname] - The pathname of the current page.
 * Defaults to the current window's pathname if not provided.
 * 
 * @returns {Promise<void>} - A promise that resolves once the necessary module is loaded.
 * 
 * @example
 * // Assuming the user navigates to '/auth/login/'
 * router(); // Loads the './views/login.js' module for the login page.
 * 
 * @example
 * // Loading a specific route directly
 * router('/post/create/'); // Loads the './views/postCreate.js' module.
 */

export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case "/":
      await import("./views/home.js");
      break;
    case "/auth/":
      await import("./views/auth.js");
      break;
    case "/auth/login/":
      await import("./views/login.js");
      break;
    case "/auth/register/":
      await import("./views/register.js");
      break;
    case "/post/":
      await import("./views/post.js");
      break;
    case "/post/edit/":
      await import("./views/postEdit.js");
      break;
    case "/post/create/":
      await import("./views/postCreate.js");
      break;
    case "/profile/":
      await import("./views/profile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
