import ReactDOM from "react-dom/client";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={appRouter()} />
);
