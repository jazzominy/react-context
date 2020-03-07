import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { EmailContext } from "./EmailContext";

const MessageList = () => {
  const { currentUser } = useContext(UserContext);
  const { loading, emails, onSelectEmail } = useContext(EmailContext);

  return (
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
            <Email key={em.id} email={em} onClick={onSelectEmail} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Email = React.memo(({ email, onClick }) => (
  <li onClick={() => onClick(email)}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.body}</div>
  </li>
));

export default MessageList;
