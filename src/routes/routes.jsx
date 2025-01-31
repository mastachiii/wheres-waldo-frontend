import { createBrowserRouter } from "react-router";
import Game from "../components/game";

const router = createBrowserRouter([
    {
        path: "/levels/:id",
        element: <Game />,
    },
]);

export default router;
