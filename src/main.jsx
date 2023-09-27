import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Details from './Components/Details/Details.jsx';
import LoaderData from '../public/donationData.json'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => LoaderData
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => LoaderData
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        // loader:  ({ params }) => {
        //  return LoaderData.filter(function(data){
        //    return params.id == data.id
        //   });
        // }
        loader: () => LoaderData
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
