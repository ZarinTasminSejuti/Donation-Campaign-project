import { createBrowserRouter } from "react-router-dom";
import Donation from "../pages/Donation/Donation";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/Donation/DonationDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const newRoute = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/cards/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json')
      },
    ],
  },
]);

export default newRoute;