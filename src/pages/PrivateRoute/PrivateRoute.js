import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../context/AuthProvider/useAuth';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { allContext } = useAuth()
    const { user, loading } = allContext;
    if (loading) {
        return <CircularProgress />;
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;