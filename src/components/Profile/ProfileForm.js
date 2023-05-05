import { useRef,useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../store/AuthContext';

const ProfileForm = () => {
  const AuthCtx=useContext(AuthContext);
  const passwordInputRef=useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredPassword=passwordInputRef.current.value;
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDXx5szR2zhd9OQlqBegt7PJUE8RXQAqAk',{
      method: 'POST',
      body: JSON.stringify({
        idToken: AuthCtx.token,
        password: enteredPassword,
        returnSecureToken: false,
      }),
      headers :{
        'Content-Type': 'application/json'
      }
    })

    
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordInputRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
