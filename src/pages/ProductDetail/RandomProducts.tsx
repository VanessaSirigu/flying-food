import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConnectedProductCard } from '../../components/ConnectedProductCard'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { productsActions } from '../../features/products/reducer'
import { selectRelatedProducts } from '../../features/products/selectors'

type Props = {
  excludedId: string
}

const RandomProductsCmp = ({ excludedId }: Props) => {
  const relatedProducts = useSelector(selectRelatedProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsActions.fetchRelatedProducts(excludedId))
    return () => {
      dispatch(productsActions.resetRelatedProduct())
    }
  }, [dispatch, excludedId])

  if (!relatedProducts) return <Loader />

  return (
    <Grid cols={2} gap={32}>
      {relatedProducts?.map((r) => (
        <ConnectedProductCard product={r} key={r.id} />
      ))}
    </Grid>
  )
}

export const RandomProducts = memo(RandomProductsCmp)
