import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";

//Chunking
//Code Splitting
//Dynamic Budling
//Lazy loadding
//On deman loading

const Grocery = lazy(()=> import("./Components/Grocery"))

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
        path: "/grocery",
        element: <Suspense fallback={<h1 style={{padding:"200px"}}>Loading.....</h1>} ><Grocery/></Suspense>,
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
