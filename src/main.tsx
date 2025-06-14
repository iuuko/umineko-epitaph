import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/base.css";
import "virtual:uno.css";
import "@/i18n";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Quadrillion from "@/pages/Quadrillion";
import GoldenLand from "@/pages/GoldenLand";
import NotFound from "@/pages/NotFound";

// 创建路由配置
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/quadrillion",
    element: <Quadrillion />,
  },
  {
    path: "/goldenLand",
    element: <GoldenLand />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
