import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState([]);
    const auth = getAuth();
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const signOuT = () => {
        signOut(auth)
        .then(() => {});
    };

    //   observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else{
            setUser({});
        }
        });
        return () => unsubscribed;
    });

    return{ user, googleSignIn, signOuT };
};

export default useFirebase;