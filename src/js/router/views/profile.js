import { loadData } from "../../api/storage";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();
// profile template elements
const profile = document.getElementById('profile-info');
const profileHeader = document.getElementById('profile-header');
const profileAvatar = document.getElementById('profile-avatar');

// setting local storage info
const userDataStorage = loadData('profile');
const {name, email, bio, avatar, banner} = userDataStorage;
const profileData = {name, email, bio, avatar, banner};

console.log(userDataStorage)

function createProfileHTML() {
    // creating elements
    const pName = document.createElement('h2');
    const pEmail = document.createElement('p');
    const pBio = document.createElement('p');
    const pAvatarImg = document.createElement('img');

    pName.textContent = profileData.name;
    pEmail.textContent = profileData.email;
    pBio || pBio !== null
        ? pBio.textContent = profileData.bio
        : pBio.textContent = '';
    pAvatarImg.src = profileData.avatar.url;
    pAvatarImg.alt = profileData.avatar.alt;
    profileHeader.style.backgroundImage = `url(${profileData.banner.url})`;

    profile.appendChild(pName);
    profile.appendChild(pEmail);
    profile.appendChild(pBio);
    profileAvatar.appendChild(pAvatarImg);
}

createProfileHTML();
