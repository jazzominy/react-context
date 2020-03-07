import React from "react";

const { Provider, Consumer } = React.createContext();

class NotificationProvider extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.timer = setInterval(this.cleanup, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  cleanup = () => {
    let now = Date.now();

    this.setState(state => ({
      messages: state.messages.filter(m => now - m.addedAt < 3000)
    }))
  }

  addMessage = text => {
    this.setState(state => ({
      messages: [
        ...state.messages,
        {
          id: Math.random(),
          text,
          addedAt: new Date().getTime()
        }
      ]
    }));
  };

  removeMessage = message => {
    this.setState(state => ({
      messages: state.messages.filter(m => m.id !== message.id)
    }));
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          notify: this.addMessage
        }}
      >
        <div className="notification-wrapper">
          <ul>
            {this.state.messages.map(m => (
              <Notification
                key={m.id}
                message={m}
                onClose={() => this.removeMessage(m)}
              ></Notification>
            ))}
          </ul>
        </div>
        {this.props.children}
      </Provider>
    );
  }
}

const Notification = ({ message, onClose }) => (
  <li>
    {message.text}
    <button className="close" onClick={onClose}>
      &times;
    </button>
  </li>
);

function withNotifier(Component) {
  return function Notified(props) {
    return (
      <Consumer>
        {({ notify }) => <Component {...props} notify={notify}></Component>}
      </Consumer>
    );
  };
}

export { NotificationProvider, Consumer as Notifier, withNotifier };
