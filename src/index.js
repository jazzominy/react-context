import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import "./index.css";
import { UserProvider, UserConsumer } from "./components/UserContext";
import { EmailProvider } from "./components/EmailContext";

const App = () => {
  return (
    <UserConsumer>
      {({ currentUser }) => (currentUser ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
};

ReactDOM.render(
  <UserProvider>
    <EmailProvider>
      <App />
    </EmailProvider>
  </UserProvider>,
  document.getElementById("root")
);
