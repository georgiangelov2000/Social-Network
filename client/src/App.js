import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute";
import CreateProfile from "./components/Profile/CreateProfile/CreateProfile";
import AddExperience from './components/Profile/AddExperience/AddExperience';
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute 
          exact 
          path="/add-education" />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
