
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** Import All Components */
import Username from './components/Username'
import Reset from './components/Reset';
import Register from './components/Register';
import Recovery from './components/Recovery';
import Profile from './components/Profile'
import Password from './components/Password'
import PageNotFound from './components/PageNotFound'


/** root Routes*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username/>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  },
  
])
function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;
