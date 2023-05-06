import React, { useContext } from 'react'
import AuthContext from '../store/AuthContext'

export default function ButtonComp() {
   const authCtx= useContext(AuthContext);
   const temp=()=>{
    console.log(authCtx.isLoggedIn);
   }
  return (
    <li>
        <button onClick={temp}>Button Comp</button>
    </li>
  )
}
