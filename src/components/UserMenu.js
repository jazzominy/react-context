import React from "react";

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
      <div className="UserMenu">
        <img
          className="UserAvatar"
          src={this.props.currentUser.avatar}
          onClick={this.toggleMenu}
          ref={this.avatarRef}
        />
        {this.state.menuVisible && (
          <ul>
            <li onClick={this.props.onLogout}>Logout</li>
          </ul>
        )}
      </div>
    );
  }
}

export default UserMenu;
