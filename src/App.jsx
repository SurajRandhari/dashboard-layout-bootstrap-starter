
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Layout from './Layout/Layout';
const App = () => {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path:'/about',
          element:<About/>
        }
      ]
    },
   

  ])


  return <RouterProvider router={router} />

}

export default App
