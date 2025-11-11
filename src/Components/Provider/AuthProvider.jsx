import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { app } from '../../FireBase/Firebase.config';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUSer = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user,
        setUser,
        createUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;