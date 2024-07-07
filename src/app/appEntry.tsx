import ReactDOM from "react-dom/client";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import { CurrencyProvider } from "./providers/CurrencyProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CurrencyProvider>
    <RouterProvider router={appRouter()} />
  </CurrencyProvider>
);
