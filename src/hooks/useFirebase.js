import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [users, setUsers] = useState([]);
    const auth = getAuth();
    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result => {
            setUsers(result.user);
        });
    };

    return{ users, googleSignIn};
};

export default useFirebase;