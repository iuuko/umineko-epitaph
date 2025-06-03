import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Layout: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Navigation className="main-navigation" />
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>Powered by Vite + React + TypeScript + React Router + i18next</p>
      </footer>
    </div>
  );
};

export default Layout;
