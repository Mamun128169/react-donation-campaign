import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import SingleCategory from './components/SingleCategory/SingleCategory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        loader: async () => {
          try {
            const response = await fetch("/donation.json");
            if (!response.ok) {
              throw new Error("Failed to fetch donation data");
            }
            return await response.json();
          } catch (error) {
            console.error("Error fetching donation data:", error);
            throw error; // Rethrow the error to trigger the error element
          }
        },
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        loader: async () => {
          try {
            const response = await fetch("/donation.json");
            if (!response.ok) {
              throw new Error("Failed to fetch donation data");
            }
            return await response.json();
          } catch (error) {
            console.error("Error fetching donation data:", error);
            throw error; // Rethrow the error to trigger the error element
          }
        },
        element: <Statistics></Statistics>
      },
      // dynamic routing
      {
        path: "/category/:id",
        loader: async () => {
          try {
            const response = await fetch("/donation.json");
            if (!response.ok) {
              throw new Error("Failed to fetch donation data");
            }
            return await response.json();
          } catch (error) {
            console.error("Error fetching donation data:", error);
            throw error; // Rethrow the error to trigger the error element
          }
        },
        element: <SingleCategory></SingleCategory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
