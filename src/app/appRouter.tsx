import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import { MainPage } from "@/pages/main";
import LoginPage from "@/pages/login/ui/Page";
import RegisterPage from "@/pages/register/ui/Page";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
