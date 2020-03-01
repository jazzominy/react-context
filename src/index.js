import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import "./index.css";
import UserContext from "./components/UserContext";

class App extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >
        {this.state.currentUser ? (
          <MainPage />
        ) : (
          <LoginPage />
        )}
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
