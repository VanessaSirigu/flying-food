import { Global, ThemeProvider } from '@emotion/react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getTags } from './api'
import { TagDto } from './api/types'
import { Layout } from './components/Layout'
import { Cart } from './pages/Cart'
import { Homepage } from './pages/Homepage'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

function App() {
  const [tags, setTags] = useState<TagDto[]>([])
  useEffect(() => {
    getTags()
      .then((tags) => setTags(tags))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="products" element={<Products tags={tags} />} />
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
