import { Outlet } from "react-router";
import { Sidebar } from "../common/Sidebar";


export const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-stone-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
