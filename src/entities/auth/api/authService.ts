import { NavigateFunction } from "react-router-dom";

export function authService(
  type: "login" | "register",
  navigate: NavigateFunction
) {
  switch (type) {
    case "login":
      return () => {
        console.log("Sign In button clicked.");
        navigate("/login");
      };
    case "register":
      return () => {
        console.log("Sign Up button clicked.");
        navigate("/register");
      };
    default:
      return () => null;
  }
}
