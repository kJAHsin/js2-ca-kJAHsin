import { clearData } from "../../api/storage";
import { Toast } from "../toast/Toast.js";

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
        `The item you are trying to remove is not present: \n\t${item} \n\t${err}`
      );
    }
    const toast = new Toast('success', 'You were successfully logged out!');
    toast.toastIt();

    setTimeout(() => {
      window.location.href = '/auth/login/';
    }, 3000);
  });
}
