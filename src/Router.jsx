import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import HomeScreen from './pages/HomeScreen';
import MathScreen from './pages/MathScreen';

const router = createBrowserRouter([
   {path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path: "/math",
            element: <MathScreen />
        }
    ]
    }

]);

const Router = ()=> <RouterProvider router={router}/>

export default Router;