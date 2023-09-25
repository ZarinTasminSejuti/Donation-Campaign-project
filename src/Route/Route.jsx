import { createBrowserRouter } from "react-router-dom";
import Donation from "../pages/Donation/Donation";
import Homes from "../pages/Home/Homes";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics/Statistics";

const newRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
          {
              path: "/",
              element: <Homes></Homes>
          },
        {
          path: "/Donation",
          element: <Donation></Donation>
        },
        {
          path: "/Statistics",
          element: <Statistics></Statistics>
        }
      ]
  }])

export default newRoute;