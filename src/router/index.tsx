import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 导入路由相关组件
import Layout from "../components/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

// 路由路径常量，确保类型安全
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
} as const;

// 路由类型定义
export type RouteKeys = keyof typeof ROUTES;
export type RoutePaths = (typeof ROUTES)[RouteKeys];

// 创建路由配置
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

// 路由提供者组件
const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
