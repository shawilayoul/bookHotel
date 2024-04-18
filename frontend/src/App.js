import {router} from "./routing/route";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
