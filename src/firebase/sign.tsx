import { signOut ,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
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
        await signInWithEmailAndPassword(auth, email, password)

        return true
    }catch(err){
        console.log('login error' , err)
        return false
    }
}

export const SignUpByEmail = async (email :string, password : string) => {
    try{
        await createUserWithEmailAndPassword(auth, email, password)

        console.log('sign up success')
        return true
    }catch(error : any) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log('sign up error' , error)
        return false
    }
}
