import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Text } from './components/Text'
import { Cart } from './pages/Cart'
import { Homepage } from './pages/Homepage'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/products/:id',
    element: <ProductDetail />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
