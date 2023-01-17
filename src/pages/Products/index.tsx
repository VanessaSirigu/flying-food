import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../api'
import { TagDto } from '../../api/types'
import { Button } from '../../components/Button'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productsAction } from '../../features/products/reducer'
import { useFetch } from '../../hooks/useFetch'
import { first } from '../../Utils'
import { ProductsHeader } from './ProductsHeader'

export type Props = {
  tags?: TagDto[]
}

export const Products = ({ tags }: Props) => {
  const [selected, setSelected] = useState('')
  const { resource: products } = useFetch(getProducts)
  const dispatch = useDispatch()

  const handleFilterClick = (tag: FilterItem) => {
    setSelected(tag.id)
  }

  const filteredTags = tags ? tags.filter((tag) => !tag.hidden) : []
  const selectedTag = selected || first(filteredTags)?.id || ''
  const filterProducts = products?.filter(({ tags }) => tags.includes(selectedTag))

  if (!(products && tags)) return <Loader />

  return (
    <div>
      <ProductsHeader
        selected={selectedTag}
        items={filteredTags.map(({ name, id }) => ({ name, id }))}
        onFilterSelect={handleFilterClick}
      />
      {selectedTag && filterProducts && (
        <Grid cols={4} gap={32}>
          {filterProducts.map((p) => (
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
      )}
    </div>
  )
}
