import React, { useState,useEffect } from 'react'
import AuthContext from './AuthContext';

export default function AuthContextProvider(props)  {
    // const initialToken=localStorage.getItem('token');
    // const [token,setToken]=useState(null);
    const[loggedIn, setLoggedIn]=useState(false);

    // const userIsLoggedIn= !!token;


    const loginhandler=()=>{
        // setToken(token);
        console.log('I am executed');
        setLoggedIn(!loggedIn);
        // localStorage.setItem('token', token);
    }

    const logoutHandler=()=>{
        // setToken(null);
        setLoggedIn(!loggedIn);
        // localStorage.removeItem('token');
    }

    const contextValue={
        // token: token,
        isLoggedIn : loggedIn,
        login : loginhandler,
        logout : logoutHandler,
    }

   useEffect(()=>{
    if(localStorage.getItem('email') || localStorage.getItem('id')){
      setLoggedIn(true);
    }
   },[])
  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  )
}
