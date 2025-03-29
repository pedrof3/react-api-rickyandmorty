import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharactersPage from "./components/CharactersPage.jsx";
import Character from "./components/Character.jsx";
import "./index.css";

const router = createBrowserRouter([
    { path: "/", element: <CharactersPage /> },
    { path: `/character`, element: <Character /> },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
