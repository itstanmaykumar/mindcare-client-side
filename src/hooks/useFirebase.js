import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();
    const googleSignIn = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
        // .finally(() => setLoading(false));
    };

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[])
    const logOut = () =>{
        setLoading(true);
        signOut(auth).then(() => {})
        .finally(() => setLoading(false));
    };
    // console.log(user);
    return { user, isLoading, googleSignIn, logOut };
};

export default useFirebase;
