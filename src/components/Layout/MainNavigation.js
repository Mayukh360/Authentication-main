import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../store/AuthContext';

const MainNavigation = () => {
  const history=useHistory();
  const authCtx=useContext(AuthContext);

  const isLoggedIn= authCtx.isLoggedIn;

  // const temp=()=>{
  //   console.log(isLoggedIn);
  // }

  const logoutHandler=()=>{
    authCtx.logout();
    history.replace('/auth');
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}

          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
        { isLoggedIn &&   <li>
           <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
      {/* <button onClick={temp}>Login Check</button> */}
    </header>
  );
};

export default MainNavigation;
