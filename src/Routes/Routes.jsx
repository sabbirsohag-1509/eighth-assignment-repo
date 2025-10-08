import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Error from "../Pages/ErrorElement/Error";
import ShowAllApps from "../Pages/ShowAllApps/ShowAllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import InstallationApp from "../Pages/InstallationApp/InstallationApp";
import Charts from "../Pages/Charts/Charts";


export const router = createBrowserRouter ([ 
    {
        path:'/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader:  () => fetch('/mobileAppData.json').then(res => res.json()),
                Component: Home
            },
            {
                path:'/showAllApps',
                loader:  () => fetch('/mobileAppData.json').then(res => res.json()),
                Component: ShowAllApps
            },
            {
                path:'/appDetails/:appId',
                loader: () => fetch('/mobileAppData.json').then(res => res.json()),
                Component: AppDetails
            },
            {
                path:'/installationApp',
                Component: InstallationApp
            },
            {
                path:'/charts',
                loader:  () => fetch('/mobileAppData.json').then(res => res.json()),
                Component: Charts
            }
        ]
    }
])