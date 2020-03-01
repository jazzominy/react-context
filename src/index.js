import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import "./index.css";

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
    return this.state.currentUser ? (
      <MainPage currentUser={this.state.currentUser} onLogout={this.handleLogout}/>
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
