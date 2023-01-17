import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productsAction } from '../../features/products/reducer'
import { selectFilteredProducts } from '../../features/products/selectors'
import { ProductsHeader } from './ProductsHeader'

export const Products = () => {
  const filteredProducts = useSelector(selectFilteredProducts) // prodotti filtrati in base al tag

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsAction.fetchProducts())
  }, [dispatch])

  if (!filteredProducts.length) return <Loader />

  return (
    <div>
      <ProductsHeader />

      <Grid cols={4} gap={32}>
        {filteredProducts.map((p) => (
          <ProductCard
            linkUrl={`/products/${p.id}`}
            key={p.id}
            id={p.id}
            imgSrc={p.imageUrl}
            name={p.name}
            rating={p.rating}
            price={`${p.price.type} ${p.price.value}`}
            isNew={p.new}
            isAvailable={p.available}
          />
        ))}
      </Grid>
    </div>
  )
}
