import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homes from "../Home/Homes";

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
          element: <div>Donation Page</div>
        },
        {
          path: "/Statistics",
          element: <div>Statistics Page</div>
        }
      ]
  }])

export default newRoute;