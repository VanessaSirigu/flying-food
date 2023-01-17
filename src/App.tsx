import { Global, ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { getTags } from './api'
import { Layout } from './components/Layout'
import { store } from './features/store'
import { useFetch } from './hooks/useFetch'
import { Cart } from './pages/Cart'
import { Homepage } from './pages/Homepage'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

function App() {
  const { resource: tags } = useFetch(getTags)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="products" />} />
              <Route path="products" element={<Products tags={tags} />} />
              <Route path="products/:id" element={<ProductDetail tags={tags} />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
