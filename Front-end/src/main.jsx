import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Compare from './components/Compare.jsx';
import CheckOut from './components/CheckOut.jsx';
import Cart from './components/Cart.jsx';
import { Provider } from 'react-redux';
import store from './components/context/index.js';


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [

      { path: "/shop", element: <Shop /> },
      { path: "/", element: <Home /> },
      { path: "/SingleProduct", element: <SingleProduct /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/compare", element: <Compare /> },
      { path: "/checkout", element: <CheckOut /> },
      { path: "/cart", element: <Cart /> }
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
