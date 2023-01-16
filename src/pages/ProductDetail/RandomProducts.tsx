import { memo, useCallback } from 'react'
import { getRandomProducts } from '../../api'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { useFetch } from '../../hooks/useFetch'

type Props = {
  excludedId?: string
}

const RandomProductsCmp = ({ excludedId }: Props) => {
  const getProducts = useCallback(() => getRandomProducts(excludedId), [excludedId])
  const { resource, loading } = useFetch(getProducts)

  if (loading) return <Loader />

  return (
    <Grid cols={2} gap={32}>
      {resource?.map((r) => (
        <ProductCard
          linkUrl={`/products/${r.id}`}
          size="sm"
          key={r.id}
          id={r.id}
          imgSrc={r.imageUrl}
          name={r.name}
          rating={r.rating}
          price={`${r.price.type} ${r.price.value}`}
          isAvailable={r.available}
          isNew={r.new}
        />
      ))}
    </Grid>
  )
}

export const RandomProducts = memo(RandomProductsCmp)
