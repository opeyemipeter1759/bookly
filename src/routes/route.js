import Home from "../pages/home"
import Login from "../pages/login"
import Contact from "../pages/contact"
import Register from "../pages/register"
import { RouteLinks } from "./route-links"
import About from "../pages/about"


export const PublicRoute = [
    {
      component: <Home />,
      path: RouteLinks.home,
      exact: true,
    },
    {
        component: <Contact/>,
        path: RouteLinks.contact,
        exact: true,
    },
    {
        component: <About/>,
        path: RouteLinks.about,
        exact: true,
      },
];
  
export const AuthRoute = [
    {
      component: <Login />,
      path: RouteLinks.login,
      exact: true,
    },
    {
        component: <Register/>,
        path: RouteLinks.signup,
        exact: true,
      },
  ];
  