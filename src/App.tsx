import { Global, ThemeProvider } from '@emotion/react'
import { ReduxRouter } from '@lagunovsky/redux-react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { tagsActions } from './features/tags/reducer'
import { Cart } from './pages/Cart'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'
import { history } from './Utils/history'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tagsActions.fetchTags())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ReduxRouter history={history}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ReduxRouter>
    </ThemeProvider>
  )
}

export default App
