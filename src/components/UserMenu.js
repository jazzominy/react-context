import React from "react";
import { UserConsumer } from "./UserContext";

class UserMenu extends React.Component {
  state = {
    menuVisible: false
  };
  avatarRef = React.createRef();

  hideMenu = e => {
    if (e.target !== this.avatarRef.current) {
      this.setState({
        menuVisible: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.hideMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hideMenu);
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuVisible: !state.menuVisible
    }));
  };

  render() {
    return (
      <UserConsumer>
        {({ currentUser, onLogout }) => (
          <div className="UserMenu">
            <img
              className="UserAvatar"
              src={currentUser.avatar}
              onClick={this.toggleMenu}
              ref={this.avatarRef}
            />
            {this.state.menuVisible && (
              <ul>
                <li onClick={onLogout}>Logout</li>
              </ul>
            )}
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default UserMenu;
