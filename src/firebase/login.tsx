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

export const EmailLogIn  = async (email : string, password : string )  => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return true
    }catch(err){
        console.log('login error' , err)
        return false
    }
}
