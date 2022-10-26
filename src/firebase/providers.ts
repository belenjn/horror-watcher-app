import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
