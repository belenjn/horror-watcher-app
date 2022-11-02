import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
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

    const { uid } = resp.user;

    await updateProfile(FirebaseAuth.currentUser!, { displayName });

    return {
      ok: true,
      uid,
      email,
      displayName,
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, displayName } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
    };
  } catch (error: any) {
    return { ok: false, errorMessage: error.message };
  }
};
