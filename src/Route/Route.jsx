import { createBrowserRouter } from "react-router-dom";
import Donation from "../pages/Donation/Donation";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/Donation/DonationDetails";

const newRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
          {
              path: "/",
              element: <Home></Home>,
              loader: ()=> fetch('/data.json')
          },
          {
            path: "/Donation",
            element: <Donation></Donation>
          },
          {
            path: "/Statistics",
            element: <Statistics></Statistics>
          },
          {
            path: "/cards/:id",
            element: <DonationDetails></DonationDetails>,
            loader: ()=> fetch('/data.json')
          }
      ]
  }])

export default newRoute;