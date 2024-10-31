import { loadData } from "../api/storage";
import { Toast } from "../ui/toast/Toast.js";

export function authGuard() {
  const accessToken = loadData('accessToken');

  if (!accessToken) {
    document.body.style.pointerEvents = 'none';
    const toast = new Toast('warning', 'No access!<br>This page is only for logged in users, Friend!<br>Please log in and try again.');
    toast.toastIt();
    
    setTimeout(() => {window.location.href = "/auth/login/"}, 5000);
  }
}
