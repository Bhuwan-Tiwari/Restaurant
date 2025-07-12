import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path:"/resturants/:resId",
        element :<ResturantMenu/>
      }
    ],

    errorElement: <Error />,
  }
]);

export default appRouter;
