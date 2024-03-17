import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import Layout from "./layout/Layout";
import Places from "./routes/Places/Places";
import PlaceDetail from "./routes/PlaceDetail/PlaceDetail";
import Login from "./routes/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/places",
          element: <Places />,
        },
        {
          path: "/places/:placeId",
          element: <PlaceDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
