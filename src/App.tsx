import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import { UserProvider } from "./contexts/UserContext";
import Notfound from "./routes/Notfound/Notfound";
import { ChatsProvider } from "./contexts/ChatContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ThemeProvider } from "./contexts/ThemeContext";
import Loading from "./components/Loading/Loading";

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

  const Home = lazy(() => import("./routes/Home/Home"));
  const Places = lazy(() => import("./routes/Places/Places"));
  const PlaceDetail = lazy(() => import("./routes/PlaceDetail/PlaceDetail"));
  const MyProfile = lazy(() => import("./routes/MyProfile/MyProfile"));
  const Login = lazy(() => import("./routes/Login/Login"));

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loading />}>
          <UserProvider>
            <Login />
          </UserProvider>
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <ThemeProvider>
            <UserProvider>
              <ChatsProvider>
                <Layout />
              </ChatsProvider>
            </UserProvider>
          </ThemeProvider>
        </Suspense>
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
          element: (
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          ),
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
