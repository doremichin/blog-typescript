import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import {useDispatch} from "react-redux";
import {checkedAuth, setUserInfo } from "../redux/auth/slice";

export const useAuthState = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                dispatch(setUserInfo(user))
                console.log('useAuthState' , user)
                // ...
            } else {
                // User is signed out
                // ...
                console.log('you can login now!')
            }
            dispatch(checkedAuth())
        });
    }, []);
}
