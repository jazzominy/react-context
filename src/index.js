import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import "./index.css";
import { UserProvider, UserConsumer } from "./components/UserContext";

const App = () => {
  return (
    <UserConsumer>
      {({ currentUser }) => (currentUser ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
};

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
