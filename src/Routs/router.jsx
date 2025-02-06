import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Home";
import ErrorPage from "../Pages/ErrorPage";
import EJP_Dashboard from "../Pages/EJP_Dashboard";
import EJP_Ques from "../EJP/EJP_Ques";
import AnsBox from "../EJP/AnsBox";
import Basic from "../Basic_Section.jsx/Basic";




const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/basic",
                element: <Basic></Basic>
            },
            {
                path: "/ejp_dash",
                element: <EJP_Dashboard></EJP_Dashboard>,
                children: [
                    {
                        path: "/ejp_dash",
                        element: <AnsBox></AnsBox>
                    },
                    {
                        path: "/ejp_dash/:id",
                        element: <EJP_Ques></EJP_Ques>,
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])


export default router;