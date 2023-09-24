import { createBrowserRouter } from "react-router-dom";
import Donation from "../Donation/Donation";
import Homes from "../Home/Homes";
import MainLayout from "../layouts/MainLayout";

const newRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
          {
              path: "/Homes",
              element: <Homes></Homes>
          },
        {
          path: "/Donation",
          element: <Donation></Donation>
        },
        {
          path: "/Statistics",
          element: <div>Statistics Page</div>
        }
      ]
  }])

export default newRoute;