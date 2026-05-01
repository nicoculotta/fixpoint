import { createBrowserRouter } from "react-router";
import PropertiesPage from "../modules/properties/PropertiesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PropertiesPage />,
  },
]);