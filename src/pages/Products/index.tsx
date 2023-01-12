import { useEffect, useState } from 'react'
import { getProducts, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProductsHeader } from './ProductsHeader'

export const Products = () => {
  const [products, setProducts] = useState<ProductDto[]>()
  const [tags, setTags] = useState<TagDto[]>([])
  const [selected, setSelected] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getTags(), getProducts()])
      .then(([tags, products]) => {
        setTags(tags)
        setProducts(products)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleFilterClick = (tag: FilterItem) => {
    tag.id === selected ? setSelected('') : setSelected(tag.id)
  }

  return (
    <div>
      <ProductsHeader
        selected={selected}
        items={tags.filter((tag) => !tag.hidden).map(({ name, id }) => ({ name, id }))}
        onFilterSelect={handleFilterClick}
      />
      {loading && <Loader />}
      {products && (
        <Grid>
          {products.map((p, i) => (
            <ProductCard
              key={i}
              imgSrc={p.imageUrl}
              name={p.name}
              rating={p.rating}
              price={`${p.price.type} ${p.price.value}`}
            />
          ))}
        </Grid>
      )}
    </div>
  )
}
