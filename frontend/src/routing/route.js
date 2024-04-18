import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AppLayOut from "../components/AppLayOut";
import Hotel from "../pages/hotel/Hotel";
import List from "../pages/list/List";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/hotelList",
        element: <List />,
      },
    ],
  },
]);
