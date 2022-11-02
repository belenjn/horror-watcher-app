import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, email, uid } = result.user;

    return { ok: true, displayName, email, uid };
  } catch (error: any) {
    const { code } = error.code;

    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  try {

    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const {uid} = resp.user;

    console.log(resp)

    //TODO: actualizar el displayname en firebase

    return {
      ok: true,
      uid, email, displayName
    }

  } catch (error: any) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
