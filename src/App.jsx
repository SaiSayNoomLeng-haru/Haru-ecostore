
import { 
  createBrowserRouter, RouterProvider
} from 'react-router'
import './App.css'
import { createContext, lazy, Suspense, useState } from 'react'
import MainLayout from './Layout/MainLayout';

// lay components
const Home = lazy(() => import('./Pages/Home'));


const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ] 
  }
])

function App() {
  const [ cart, setCart ] = useState({});
  const [ fav, setFav ] = useState({});
 
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <AppContext.Provider value={{}}>
          <RouterProvider router={router} />
      </AppContext.Provider>
    </Suspense>
  )
}

export default App
