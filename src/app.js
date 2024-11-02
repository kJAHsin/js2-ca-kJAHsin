import "./css/style.css";
import router from "./js/router";
import { LogoutButton } from "./js/ui/global/components/LogoutButton.js";

await router(window.location.pathname);
