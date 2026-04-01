import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Approute from "./Approute";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Dynamic from "./component/Dynamic";
import Footer from "./component/Footer";
import Blogdetail from "./component/Blogdetail";
function App() {
    // useLocation
    // useState, useEffect, useCallback, useParms, useMemo, useContext, 

const router = createBrowserRouter([
{
path: "/",
element: <Approute />,
children: [
{
path: "",
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
path: "/contact",
element: <Contact />
},
{
path: "/dynamic-routing/:id",
element: <Dynamic />},
// },{
//     path:"/blog/:id",
//     element:<Blogdetail/>
// }
{
    path:"/blogdetail",
    element:<Blogdetail/>
}

]
}
]);

return <RouterProvider router={router} />;

}

export default App;