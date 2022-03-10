import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

import { validateEmail } from "./utilities/regex.js";
import { validatePassword } from "./utilities/regex.js";
//-------------------------------SIGN IN-------------------------------//

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const connectionBtn = document.querySelector('#connection')
// const signOutBtn = document.querySelector('#signOut')
const errorMsg = document.querySelector('#errorMsg')

function signIn (email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.location.href = "page.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

connectionBtn.addEventListener('click', () => {
  if(validateEmail(email) && validatePassword(password)){
    signIn(email, password)
} else {
    errorMsg.textContent = "Email ou mot de passe invalide.";
}
})
