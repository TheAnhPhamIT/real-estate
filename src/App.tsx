import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import Layout from "./layout/Layout";
import Places from "./routes/Places/Places";
import PlaceDetail from "./routes/PlaceDetail/PlaceDetail";
import Login from "./routes/Login/Login";
import { useEffect } from "react";
import { UserProvider } from "./contexts/UserContext";
import Notfound from "./routes/Notfound/Notfound";
import MyProfile from "./routes/MyProfile/MyProfile";
import { ChatsProvider } from "./contexts/ChatContext";

// if (typeof window !== 'undefined') {
//   // Check if we're running in the browser.
//   // Only runs once per app load
//  checkAuthToken();
//  loadDataFromLocalStorage();
// }

let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <UserProvider>
          <Login />
        </UserProvider>
      ),
    },
    {
      path: "/",
      element: (
        <UserProvider>
          <ChatsProvider>
            <Layout />
          </ChatsProvider>
        </UserProvider>
      ),
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
        {
          path: "/my-profile",
          element: <MyProfile />,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
