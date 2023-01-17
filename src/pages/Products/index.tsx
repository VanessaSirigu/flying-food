import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getTags } from '../../api'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productsAction } from '../../features/products/reducer'
import { selectFilteredProducts } from '../../features/products/selectors'
import { tagsAction } from '../../features/tags/reducer'
import { selectVisibleTags, selectSelectedTag } from '../../features/tags/selector'
import { ProductsHeader } from './ProductsHeader'

export const Products = () => {
  const filteredProducts = useSelector(selectFilteredProducts) // prodotti filtrati in base al tag
  const visibleTags = useSelector(selectVisibleTags) // tags non hidden
  const selectedTag = useSelector(selectSelectedTag) // id del tag selezionato
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsAction.loadingChanged(true))
    getProducts().then((p) => dispatch(productsAction.productsLoaded(p)))

    dispatch(tagsAction.loadingChanged(true))
    getTags().then((t) => dispatch(tagsAction.tagsLoaded(t)))
  }, [dispatch])

  const handleFilter = (tag: FilterItem) => {
    dispatch(tagsAction.tagSelected(tag.id))
  }

  if (!filteredProducts.length) return <Loader />

  return (
    <div>
      <ProductsHeader
        selected={selectedTag}
        items={visibleTags.map(({ name, id }) => ({ name, id }))}
        onFilterSelect={handleFilter}
      />

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
