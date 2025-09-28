import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./redux/Store";
import ErrorBoundary from "./ui/components/error_boundary";
import appRouter from "./config/Routes";

const routes = createBrowserRouter(appRouter());
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={routes} />
        <Toaster position="top-right" richColors closeButton />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
