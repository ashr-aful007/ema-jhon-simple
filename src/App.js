import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Invantory from './Component/Invantory/Invantory';
import Main from './Component/Layouts/Main';
import { Loaders } from './Component/Loaders/Loaders';
import Login from './Component/Login/Login';
import Order from './Component/Orders/Order';
import PrivateRoute from './Component/Routs/PrivateRoute';
import Shipping from './Component/Shipping/Shipping';
import Shop from './Component/Shop/Shop'
import SignUp from './Component/SignUp/SignUp';

function App() {

  //create Browser Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>,
        },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/orders',
      loader: Loaders,
      element: <Order></Order>
    },
    {
      path: '/inventory',
      element: <PrivateRoute><Invantory></Invantory></PrivateRoute>
    },
    {
      path: '/shipping',
      element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
    },
    {
      path: '/about',
      element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
    },
  ])

  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
