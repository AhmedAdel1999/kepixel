import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ClientDashboard from './pages/clientdashboard';
import LoginPage from './pages/authpages/login';
import SignUpPage from './pages/authpages/signup';
import HomePage from './pages/clientdashboard/pages/homepage';
import SourcePage from './pages/clientdashboard/pages/sourcePage';
import DestinationsPage from './pages/clientdashboard/pages/destinationsPage';
import DataSourcePage from './pages/clientdashboard/pages/datasourcePage';
import CreateSourcePage from './pages/clientdashboard/pages/createsourcepage';
import SourceDetailsPage from './pages/clientdashboard/pages/sourcedeatilspage';
import DestinationDataPage from './pages/clientdashboard/pages/destinationdatapage';
import DestinationDetailsPage from './pages/clientdashboard/pages/destinationdetailspage';
import CreateDestinationPage from './pages/clientdashboard/pages/createdetinationpage';
import AutomationPage from './pages/clientdashboard/pages/automationPage';
import AnalyticPage from './pages/clientdashboard/pages/analyticPage';
import SettingsPage from './pages/clientdashboard/pages/settingsPage';

import "./App.css"







function App() {


  const router = createBrowserRouter([
    {path: '/',element: <LoginPage />},
    {path: '/signup',element: <SignUpPage />},
    {
      path: '/dashboard',
      element: <ClientDashboard />,
      children:[
        { path: '', element: <HomePage /> },
        { path: 'integration/sources', element: <SourcePage /> },
        { path: 'integration/destinations', element: <DestinationsPage /> },
        { path: 'automation', element: <AutomationPage /> },
        { path: 'analytic', element: <AnalyticPage /> },
        { path: 'datasource', element: <DataSourcePage /> },
        { path: 'sourcedetails', element: <SourceDetailsPage /> },
        { path: 'createsource', element: <CreateSourcePage /> },
        { path: 'destinationdata', element: <DestinationDataPage /> },
        { path: 'createdestination', element: <CreateDestinationPage /> },
        { path: 'destinationdetails', element: <DestinationDetailsPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ]
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;