import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router";
import "./App.css";
import Auth from "./HOC/Auth";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import { AuthMe } from "./store/actions/auth/auth";
import { RootState } from "./store/store";
import { ILoadingStatus } from "./store/types/status";

const AuthAdmin = Auth(Main);
const NotAuthAdmin = Auth(Login);

function App() {
  const authUser = useSelector((state: RootState) => state.user.user_id);
  const status = useSelector((state: RootState) => state.auth.loadingStatus);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthMe());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <NotAuthAdmin
              path={"/admin"}
              LoadingStatus={ILoadingStatus.LOADED}
              status={status}
              preloader={ILoadingStatus.ERROR}
            />
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <AuthAdmin
              path={"/"}
              LoadingStatus={ILoadingStatus.ERROR}
              status={status}
              preloader={ILoadingStatus.LOADED}
            />
          )}
        />
        <h1>ERROR</h1>
      </Switch>
    </div>
  );
}

export default App;
