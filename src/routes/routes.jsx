import { createBrowserRouter } from "react-router";
import Game from "../components/game";
import Menu from "../components/menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
    },
    {
        path: "/levels/:id",
        element: <Game />,
    },
]);

export default router;
