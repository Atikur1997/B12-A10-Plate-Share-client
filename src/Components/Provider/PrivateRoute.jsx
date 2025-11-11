import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    console.log(user);
    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }


};

export default PrivateRoute;