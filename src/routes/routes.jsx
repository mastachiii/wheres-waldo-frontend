import { createBrowserRouter } from "react-router";
import Game from "../components/game";
import Menu from "../components/menu";
import TitleScreen from "../components/titleScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TitleScreen />,
    },
    {
        path: "/levels",
        element: <Menu />
    },
    {
        path: "/levels/:id",
        element: <Game />,
    },
]);

export default router;
