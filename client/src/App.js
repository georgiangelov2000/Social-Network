import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
