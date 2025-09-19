import { NavLink, useLocation } from "react-router-dom";
import { Home, AlertTriangle, Activity, User, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/report", icon: AlertTriangle, label: "Report" },
  { to: "/tracking", icon: Activity, label: "Track" },
  { to: "/dashboard", icon: User, label: "Profile" },
  { to: "/government", icon: Building2, label: "Govt" },
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          
          return (
            <NavLink
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 rounded-lg transition-all duration-200",
                isActive 
                  ? "text-primary bg-primary-light" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium truncate">{label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};