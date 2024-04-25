import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";


const routes=createBrowserRouter([

{
    path:'/',
    element:<Home></Home>,
}


])

export default routes ;