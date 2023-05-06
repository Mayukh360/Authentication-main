import { Fragment,useContext } from 'react';
import AuthContext from '../store/AuthContext';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  const authCtx = useContext(AuthContext);
  const loginuser = authCtx.isLoggedIn;

  const temp=()=>{
    console.log(loginuser);
  }
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <button onClick={temp}>Layout</button>
    </Fragment>
  );
};

export default Layout;
