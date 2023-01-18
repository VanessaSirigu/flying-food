import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productsAction } from '../../features/products/reducer'
import { selectRelatedProducts } from '../../features/products/selectors'

type Props = {
  excludedId: string
}

const RandomProductsCmp = ({ excludedId }: Props) => {
  const relatedProducts = useSelector(selectRelatedProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsAction.fetchRelatedProducts(excludedId))
  }, [dispatch, excludedId])

  if (!relatedProducts) return <Loader />

  return (
    <Grid cols={2} gap={32}>
      {relatedProducts?.map((r) => (
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
