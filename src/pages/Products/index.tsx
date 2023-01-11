import { useEffect, useState } from 'react'
import { getProducts, getTags } from '../../api'
import { ProductDto } from '../../api/types'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProdutsHeader } from './ProdutsHeader'

export const Products = () => {
  const [data, setData] = useState<ProductDto[]>()
  const [tags, setTags] = useState<FilterItem[]>()
  const [selected, setSelected] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTags()
      .then((tags) => setTags(tags))
      .catch((err) => console.log(err))
    getProducts()
      .then((prod) => {
        setData(prod)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onSelect = () => {}

  return (
    <div>
      {tags && <ProdutsHeader items={tags} onSelect={onSelect} />}
      {loading && <Loader />}
      {data && (
        <Grid>
          {data.map((p, i) => (
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
