import { loadData } from "../../api/storage";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();

const userData = loadData('profile');

console.log(userData)

// not working
// window.location.href = `/profile/${userData.name}`