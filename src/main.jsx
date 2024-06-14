import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Root.jsx';
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import DonationDetails from './components/DonationDetails/DonationDetails.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

// Define the loader function
const donationLoader = async () => {
    const response = await fetch('/donation.json');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
        loader:donationLoader,
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: donationLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
