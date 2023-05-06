import React, { useState } from 'react'
import AuthContext from './AuthContext';

export default function AuthContextProvider(props)  {
    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);

    const userIsLoggedIn= !!token;

    const loginhandler=(token)=>{
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
    }

    const contextValue={
        token: token,
        isLoggedIn : userIsLoggedIn,
        login : loginhandler,
        logout : logoutHandler,
    }


  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  )
}
