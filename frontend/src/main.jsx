import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, NotFoundPage, SearchPage } from './pages';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      // { path: '/categories/:category', element: <CategoryPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
