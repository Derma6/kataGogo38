import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

import { validateEmail } from "./utilities/regex.js";
import { validatePassword } from "./utilities/regex.js";

//-------------------------------SIGN UP-------------------------------//

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signUpBtn = document.querySelector('#signUpBtn')

function createAccount (email, password) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        document.location.href = "http://127.0.0.1:5500/index.html"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
  }
  
signUpBtn.addEventListener('click', () => {
    if(validateEmail(email) && validatePassword(password)){
      createAccount(email, password)
  } else {
      errorMsg.textContent = "Email ou mot de passe invalide.";
  }
  })