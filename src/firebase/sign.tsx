import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';

export const EmailLogout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('logout success!');
  }).catch((err) => {
    // An error happened.
    console.log('err', err);
  });
};

export const EmailLogIn = async (email : string, password : string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return true;
  } catch (err) {
    console.log('login error', err);
    alert('아이디 또는 비밀번호가 틀렸습니다.');
    return false;
  }
};

export const SignUpByEmail = async (email :string, password : string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    console.log('sign up success');
    return true;
  } catch (error : any) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log('sign up error', error);
    return false;
  }
};
