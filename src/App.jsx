import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Breeds from "./Breeds/Breeds";
import Coats from "./Coats/Coats";
import Contact from "./Contact/Contact";
import About from "./About/About";
import NotFound from "./NotFound";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/breeds",
        element: <Breeds />,
      },
      {
        path: "/coats",
        element: <Coats />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <RouterProvider router={myRoutes} />
    </div>
  );
}

export default App;
