import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContextProvider from "./components/store/AuthContextProvider";
import AuthContext from "./components/store/AuthContext";
import ButtonComp from "./components/Button/ButtonComp";

function App() {
  const authCtx = useContext(AuthContext);
 
  // const temp = () => {
  //   console.log(authCtx.isLoggedIn);
  // };


  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          {
            <Route path="/auth">
              <AuthPage />
            </Route>
          }

          {authCtx.isLoggedIn && (
            <Route path="/profile">
              <UserProfile />
            </Route>
          )}

          <Route path='*'> <Redirect to='/'/>  </Route>
        </Switch>
      </Layout>
      <ButtonComp />
      {/* <button onClick={temp}>AppJs</button> */}
      </>
  );
}

export default App;
