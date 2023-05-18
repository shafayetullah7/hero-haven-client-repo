import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const loginUser = (email,pass) =>{
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const logout = () =>{
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,current=>{
            if(current){
                setUser(current);
            }
            else{
                setUser(null);
            }
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        loginUser,
        logout,
        googleLogin,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;