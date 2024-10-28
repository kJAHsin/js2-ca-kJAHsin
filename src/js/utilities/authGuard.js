import { loadData } from "../api/storage";

export function authGuard() {
  const accessToken = loadData('accessToken');
  console.log(accessToken)

  if (!accessToken) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
