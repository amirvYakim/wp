import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ user }: any) {

    console.log('user', user);

    if (!user) {
        return <Navigate to='/' />;
    }
    
    return <Outlet />;
};
