import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Pages/ErrorElement/Error";


export const router = createBrowserRouter ([ 
    {
        path:'/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: () => fetch(`/mobileAppData.json`),
                Component: Home
            }
        ]
    }
])