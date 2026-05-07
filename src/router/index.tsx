import { createBrowserRouter } from "react-router";
import { MainLayout } from "../components/layout/MainLayout";
import PropertiesPage from "../modules/properties/PropertiesPage";
import IncidentsPage from "@/modules/incidents/IncidentsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <PropertiesPage /> }],
  },
  {
    path: "/incidents",
    element: <MainLayout />,
    children: [{ index: true, element: <IncidentsPage /> }],
  }
]);