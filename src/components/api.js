export const FAKE_USER = {
  firstName: "Jasmine",
  lastName: "Hirpara",
  username: "jazz",
  avatar:
    "https://secure.gravatar.com/avatar/e438057c6674a0da0721d665e6b5fa9b?s=32"
};

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
