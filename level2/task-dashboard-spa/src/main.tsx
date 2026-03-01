import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.tsx";
import DashboardPage from "./pages/dashboard";
import TasksPage from "./pages/tasks";
import SettingsPage from "./pages/settings";

import "./index.css";
import { TaskProvider } from "./context/AppContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "tasks", element: <TasksPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);