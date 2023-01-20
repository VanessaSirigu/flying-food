import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConnectedProductCard } from '../../components/ConnectedProductCard'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { productsActions } from '../../features/products/reducer'
import { selectFilteredProducts } from '../../features/products/selectors'
import { ProductsHeader } from './ProductsHeader'

export const Products = () => {
  const filteredProducts = useSelector(selectFilteredProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (filteredProducts.length === 0) dispatch(productsActions.fetchProducts())
  }, [dispatch, filteredProducts.length])

  if (!filteredProducts.length) return <Loader />

  return (
    <div>
      <ProductsHeader />
      <Grid cols={4} gap={32}>
        {filteredProducts.map((p) => (
          <ConnectedProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </div>
  )
}
