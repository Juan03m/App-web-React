import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import GenerosPage from './pages/generos/GenerosPage';
import EditPageGeneros from './pages/generos/EditPage';
import NewPageGeneros from './pages/generos/NewPage';
import PlataformasPage from './pages/plataformas/PlataformasPage';
import EditPagePlataformas from './pages/plataformas/EditPage';
import NewPagePlataformas from './pages/plataformas/NewPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardPage/>
    ),
  },
  {
    path: "/generos",
    element: (
      <GenerosPage/>
    ),
  },
  {
    path: "/generos/edit/:id",
    element: (
      <EditPageGeneros/>
    ),
  },
  {
    path: "/generos/new",
    element: (
      <NewPageGeneros/>
    ),
  },
  {
    path: "/plataformas",
    element: (
      <PlataformasPage/>
    ),
  },
  {
    path: "/plataformas/edit/:id",
    element: (
      <EditPagePlataformas/>
    ),
  },
  {
    path: "/plataformas/new",
    element: (
      <NewPagePlataformas/>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);