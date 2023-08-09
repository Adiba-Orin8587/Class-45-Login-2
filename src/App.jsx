import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'
import Order from './Component/Order/Order'
import PrivateRoute from './Component/Router/PrivateRoute'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/order',
          element: <PrivateRoute> <Order></Order></PrivateRoute>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    }
  ])

  return (

    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App
