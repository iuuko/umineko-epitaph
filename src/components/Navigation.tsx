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
      <ul className="nav-list">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            {t("navigation.home")}
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/about" 
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            {t("navigation.about")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
