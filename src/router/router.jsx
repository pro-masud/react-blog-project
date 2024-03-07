import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";


// create a react router 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/blog/:slug",
        element: <Blog />
    },
    {
        path: "/contact",
        element: <Contact />
    },
])


// export default router here
export default router;