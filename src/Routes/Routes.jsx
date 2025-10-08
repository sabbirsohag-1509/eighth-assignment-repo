import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Pages/ErrorElement/Error";
import ShowAllApps from "../Pages/ShowAllApps/ShowAllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";


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
            },
            {
                path:'/showAllApps',
                loader: () => fetch(`/mobileAppData.json`),
                Component: ShowAllApps
            },
            {
                path:'/appDetails/:appId',
                loader: () => fetch('/mobileAppData.json').then(res => res.json()),
                Component: AppDetails
            }
        ]
    }
])