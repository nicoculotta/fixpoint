import { createBrowserRouter } from "react-router";
import { MainLayout } from "../components/layout/MainLayout";
import PropertiesPage from "../modules/properties/PropertiesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <PropertiesPage /> }],
  },
]);