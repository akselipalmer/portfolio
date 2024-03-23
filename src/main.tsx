import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HireMe from "./hireMe.tsx";
import WelcomePage from "./welcomePage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      // loader: appLoader,
      children: [
        {
          path: "home",
          element: <WelcomePage />,
          // loader: teamLoader,
        },
        {
          path: "hireme",
          element: <HireMe />,
          // loader: teamLoader,
        },
      ],
    },
  ],
  { basename: "/portfolio" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
