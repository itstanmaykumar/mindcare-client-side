import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        .then ((result) => {
            setUser(result.user);
        });
    };

    useEffect(() =>{
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
        });
        return () => unsubcribed;
    },[]);

    const logOut = () => {
        signOut(auth)
        .then(() => { setUser({}) });
    };
    return { user, googleSignIn, logOut };
};

export default useFirebase;
