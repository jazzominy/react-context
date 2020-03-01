export const FAKE_USER = {
  firstName: "Jasmine",
  lastName: "Hirpara",
  username: "jazz",
  avatar:
    "https://secure.gravatar.com/avatar/e438057c6674a0da0721d665e6b5fa9b?s=32"
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: "Hey Dave",
    body: "Yo, just wanted to say hey."
  },
  {
    id: 1,
    subject: "React is great",
    body: "I thought I should let you know."
  },
  {
    id: 2,
    subject: "REQUEST FOR ASSISTANCE",
    body:
      "If you send me your bank account number I will reward you with $10 million whole US dollars."
  }
];

export function login(u, p) {
  return new Promise((done, oops) => {
    setTimeout(() => {
      if (u === "jazz" && p === "1234") {
        done(FAKE_USER);
      } else {
        oops({
          message: "Invalid username or password"
        });
      }
    });
  });
}

export function fetchEmails() {
    return new Promise((done, oops) => {
        setTimeout(() => {
            if (true) {
                done(FAKE_EMAILS);
          } else {
            oops({
              message: "Invalid username or password"
            });
          }
        });
      });
}
