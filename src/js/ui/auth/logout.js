import { clearData } from "../../api/storage";

/**
 * This function should log the user out by removing aproppriate user data from the browser.
 */

export function onLogout() {
  const storageItems = ["accessToken", "profile"];

  storageItems.forEach((item) => {
    try {
      clearData(item);
    } catch (err) {
      console.error(
        `The item you are trying to remove is not present: \n\t ${err}`
      );
    }
  });
}
