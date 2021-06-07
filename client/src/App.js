import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
