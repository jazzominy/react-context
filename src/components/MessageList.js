import React from "react";
import { UserConsumer } from "./UserContext";
import { EmailConsumer } from "./EmailContext";

const MessageList = () => (
  <UserConsumer>
    {({ currentUser }) => (
      <EmailConsumer>
        {({ loading, emails, onSelectEmail }) => (
          <div className="MessageList">
            {loading ? (
              <div className="no-messages">Loading...</div>
            ) : emails.length === 0 ? (
              <div className="no-messages">
                Your mailbox is empty, {currentUser.firstName}! 🎉
              </div>
            ) : (
              <ul>
                {emails.map(em => (
                  <Email key={em.id} email={em} onClick={() => onSelectEmail(em)}/>
                ))}
              </ul>
            )}
          </div>
        )}
      </EmailConsumer>
    )}
  </UserConsumer>
);

const Email = ({email, onClick}) => (
    <li onClick={onClick}>
        <div className="subject">{email.subject}</div>
        <div className="preview">{email.body}</div>
    </li>
)

export default MessageList;
