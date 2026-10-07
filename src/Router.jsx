import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import About from './Pages/About'
import FProductDetails from './Sections/FProductDetails'

let allRouters = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: ":id",
                element: <FProductDetails />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/contact",
                element: <Contact />
            },
            // {
            //  path: "/cart",
            //     element: <Cart/>
            // },
        ]
    }
])

const Router = () => <RouterProvider router={allRouters} />


export default Router