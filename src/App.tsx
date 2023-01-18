import { Global, ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { tagsAction } from './features/tags/reducer'
import { selectTags } from './features/tags/selector'
import { Cart } from './pages/Cart'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

function App() {
  const tags = useSelector(selectTags)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tagsAction.fetchTags())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail tags={tags} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
