import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",            // root path
    element: <App />,      // App renders <Outlet />
    children: [
      {
        index: true,       // default route
        element: <Home />, // Home component
      },
      {
        path: 'about',
        element: <About/>,

      },
    ],
  },
]);

export default router;