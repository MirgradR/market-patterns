export function authService(type: "login" | "register") {
  switch (type) {
    case "login":
      return () => {
        console.log("Sign In button clicked.");
      };
    case "register":
      return () => {
        console.log("Sign Up button clicked.");
      };
    default:
      return () => null;
  }
}
