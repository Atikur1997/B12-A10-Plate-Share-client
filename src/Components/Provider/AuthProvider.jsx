import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { app } from "../../FireBase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    
    const updateUser = (updatedData) => {
        if (!auth.currentUser) return;
        return updateProfile(auth.currentUser, updatedData).then(() => {
            setUser({ ...auth.currentUser });
        });
    };

    
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

  
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };


    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                return result.user;
            });
    };

   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUser,
        logInUser,
        logOutUser,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
