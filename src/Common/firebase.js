import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn4UxIEkdONGhbZojbljG6h5O5JYUeLcY",
    authDomain: "auth-4d62a.firebaseapp.com",
    projectId: "auth-4d62a",
    storageBucket: "auth-4d62a.appspot.com",
    messagingSenderId: "105805628227",
    appId: "1:105805628227:web:217273e0f9a5e7f347a5f6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

// export const provider = new GoogleAuthProvider();
//
// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const name = result.user.displayName;
//             const email = result.user.email;
//             const profilePic=result.user.photoURL;
//
//             localStorage.setItem("name",name);
//             localStorage.setItem("email",email);
//             localStorage.setItem("profilePic",profilePic);
//
//         }).catch(error => console.log(error))
// }