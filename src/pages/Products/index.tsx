import { useEffect, useState } from 'react'
import { getProducts } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProductsHeader } from './ProductsHeader'

type Props = {
  tags: TagDto[]
}

export const Products = ({ tags }: Props) => {
  const [products, setProducts] = useState<ProductDto[]>()
  const [selected, setSelected] = useState('')

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err))
  }, [])

  const handleFilterClick = (tag: FilterItem) => {
    setSelected(tag.id)
  }

  const filterTags = tags.filter((tag) => !tag.hidden)

  const filterProducts = products?.filter(({ tags }) =>
    tags.includes(selected ? selected : filterTags[0].id)
  )

  return (
    <div>
      <ProductsHeader
        selected={selected ? selected : filterTags[0].id}
        items={tags.filter((tag) => !tag.hidden).map(({ name, id }) => ({ name, id }))}
        onFilterSelect={handleFilterClick}
      />
      {!products && <Loader />}
      {filterProducts && (
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
              isAvailable={p.available}
              isNew={p.new}
            />
          ))}
        </Grid>
      )}
    </div>
  )
}
