import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import { CircularProgress } from '@material-ui/core'
export const AuthContext = createContext();
import './css/AuthContext.css'

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {

            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);

    return (
        <div>
            {!isLoaded ?
                <div className="circular-progress">
                    <CircularProgress />
                </div>
                :
                <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                    {children}
                </AuthContext.Provider>}
        </div>
    )
}