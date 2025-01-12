import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Routers from "../ReactRouter/Routers";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Navbar=()=>{

    const router=createBrowserRouter([
        {
          path:"/",
          element:<><Routers/><Home/></>
        },
        {
          path:"/About",
          element:<><Routers/><About/></>
        },
        {
          path:"/Contact",
          element:<><Routers/><Contact/></>
        }
    ]);
    
    return(
        <>
        {/* <Routers/> */}
       
        <RouterProvider router={router}></RouterProvider>
        </>
    )
}
 export default Navbar
