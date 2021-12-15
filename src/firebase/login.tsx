import { signOut ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase";


export const EmailLogout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('logout success!')
    }).catch((error) => {
        // An error happened.
    });
}

export const EmailLogIn  = (email : string, password : string )  => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            console.log('login error!', error)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
