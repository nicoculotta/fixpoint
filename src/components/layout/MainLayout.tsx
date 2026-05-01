import { Outlet } from 'react-router';


export const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
   
        <div className="flex flex-1 flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6 bg-slate-100">
            <Outlet />
          </main>
        </div>
  
    </div>
  );
};
