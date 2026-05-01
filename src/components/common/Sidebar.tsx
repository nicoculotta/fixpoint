import { NavLink } from "react-router";

type NavItem = {
  to: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Propiedades" },
];

export const Sidebar = () => {
  return (
    <aside
      className="flex w-64 shrink-0 flex-col border-r border-stone-200 bg-white"
      aria-label="Navegación principal"
    >
      <div className="flex h-14 items-center border-b border-stone-200 px-4">
        <span className="text-lg font-semibold tracking-tight text-stone-900">
          Fixpoint
        </span>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-3">
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-stone-900 text-white"
                  : "text-stone-700 hover:bg-stone-100",
              ].join(" ")
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};