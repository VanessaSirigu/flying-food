import { useEffect, useState } from 'react'
import { getRandomProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { Grid } from '../../components/Grid'
import { ProductCard } from '../../components/ProductCard'

type Props = {
  id?: string
}

export const RandomProducts = ({ id = '' }: Props) => {
  const [randomProduct, setRandomProduct] = useState<ProductDto[]>()

  useEffect(() => {
    getRandomProducts(id)
      .then((products) => setRandomProduct(products))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Grid column={2}>
      {randomProduct &&
        randomProduct.map((r) => (
          <ProductCard
            size="sm"
            key={r.id}
            id={r.id}
            imgSrc={r.imageUrl}
            name={r.name}
            rating={r.rating}
            price={`${r.price.type} ${r.price.value}`}
            isAvailable={r.available}
          />
        ))}
    </Grid>
  )
}
