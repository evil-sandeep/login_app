
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


/** root Routes*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Route</div>
  },
  {
    path: '/register',
    element: <div>Register Route</div>
  },
  {
    path: '/login',
    element: <div>Login Route</div>
  }
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
