import { useEffect, useState } from 'react'
import { getProducts } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProductsHeader } from './ProductsHeader'

export type Props = {
  tags?: TagDto[]
}

export const Products = ({ tags }: Props) => {
  const [products, setProducts] = useState<ProductDto[]>()
  const [selected, setSelected] = useState('')

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error)
  }, [])

  const handleFilterClick = (tag: FilterItem) => {
    setSelected(tag.id)
  }

  const filteredTags = tags ? tags.filter((tag) => !tag.hidden) : []
  const selectedTag = selected || filteredTags.at(0)?.id || ''
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
              linkUrl={p.id}
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
