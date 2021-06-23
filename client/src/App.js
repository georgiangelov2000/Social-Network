import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute";
import CreateProfile from "./components/Profile/CreateProfile/CreateProfile";
import AddExperience from "./components/Profile/AddExperience/AddExperience";
import AddEducation from "./components/Profile/AddEducation/AddEducation";
import Profiles from "./components/Profile/Profiles/Profiles";
import CurrentProfile from "./components/Profile/CurrentProfile/CurrentProfile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import Posts from "./components/Posts/Posts/Posts";
import Post from "./components/Posts/Post/Post";
import NotFound from "./components/NotFound/NotFound";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={CurrentProfile} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <PrivateRoute 
          exact 
          path="/dashboard" 
          component={Dashboard} 
          />
           <PrivateRoute 
          exact 
          path="/posts" 
          component={Posts} 
          />
          <PrivateRoute 
          exact 
          path="/edit-profile" 
          component={EditProfile} 
          />
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
            path="/posts/:id"
            component={Post}
          />
          <PrivateRoute 
          exact 
          path="/add-education" 
          component={AddEducation} 
          />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
