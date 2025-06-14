import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav>
      <div className="flex items-center justify-center gap-8 select-none">
        <div>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "font-bold" : ""}`}
            text="gray-400">
            {t("navigation.home")}
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "font-bold" : ""}`}
            text="gray-400">
            {t("navigation.about")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
