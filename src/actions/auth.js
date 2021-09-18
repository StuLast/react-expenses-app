import { googleAuthProvider } from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const logIn = (uid) => ({
  type: "LOGIN",
  uid,
});

const startLogin = () => {
  return () => {
    const auth = getAuth();
    return signInWithPopup(auth, googleAuthProvider)
      .then(() => {})
      .catch((err) => {});
  };
};

const logOut = () => ({
  type: "LOGOUT",
});

const startLogout = () => {
  return () => {
    const auth = getAuth();
    return signOut(auth)
      .then(() => {
        logOut();
      })
      .catch((err) => {});
  };
};

export { startLogin, startLogout, logIn, logOut };
