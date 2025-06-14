import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className={`navigation ${className}`}>
      <div className="flex items-center justify-center">
        <div className="mr-4">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} text="gray-400">
            {t("navigation.home")}
          </Link>
        </div>
        <div className="border-l border-gray-300 pl-4">
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`} text="gray-400">
            {t("navigation.about")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
