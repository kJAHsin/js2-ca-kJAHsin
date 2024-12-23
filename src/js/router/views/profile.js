import { loadData } from '../../api/storage'
import { authGuard } from '../../utilities/authGuard.js'

authGuard()

if (localStorage.getItem('profile')) {
   // profile template elements
   const profile = document.getElementById('profile-info')
   const profileHeader = document.getElementById('profile-header')
   const profileAvatar = document.getElementById('profile-avatar')

   // setting local storage info
   const userDataStorage = loadData('profile')
   const { name, email, bio, avatar, banner } = userDataStorage
   const profileData = { name, email, bio, avatar, banner }

   function createProfileHTML() {
      // creating elements
      const pName = document.createElement('h2')
      const pEmail = document.createElement('p')
      const pBio = document.createElement('p')
      const pAvatarImg = document.createElement('img')
      const updateProfileForm = document.createElement('form')
      // rendering content
      pName.textContent = profileData.name
      pEmail.textContent = profileData.email
      pBio || pBio !== null
         ? (pBio.textContent = profileData.bio)
         : (pBio.textContent = '')
      pAvatarImg.src = profileData.avatar.url
      pAvatarImg.alt = profileData.avatar.alt
      profileHeader.style.backgroundImage = `url(${profileData.banner.url})`
      updateProfileForm.innerHTML = `<button>Update Profile</button>`
      updateProfileForm.name = 'updateProfile'
      // appending to DOM
      profile.appendChild(pName)
      profile.appendChild(pEmail)
      profile.appendChild(pBio)
      profile.appendChild(updateProfileForm)
      profileAvatar.appendChild(pAvatarImg)
   }

   createProfileHTML()
}
