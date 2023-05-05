import React, { useState } from 'react'
import AuthContext from './AuthContext'

export default function AuthContextProvider(props) {
    const [token,setToken]=useState();

    const userIsLoggedIn= !!token;

    const loginhandler=(token)=>{
        setToken(token);
    }

    const logoutHandler=()=>{
        setToken(null);
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
