import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Layout: React.FC = () => {
  return (
    <div className="app">
      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <Navigation className="footer-navigation" />
          <p className="footer-text">
            Powered by Vite + React + TypeScript + React Router + i18next
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
