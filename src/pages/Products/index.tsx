import { useEffect, useState } from 'react'
import { getProducts, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProductsHeader } from './ProductsHeader'

export type Props = {
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
    setSelected(tag.id === selected ? '' : tag.id)
  }

  const filterProducts = selected
    ? products?.filter(({ tags }) => tags.includes(selected))
    : products

  return (
    <div>
      <ProductsHeader
        selected={selected}
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
              isNew={p.new}
              isAvailable={p.available}
            />
          ))}
        </Grid>
      )}
    </div>
  )
}
