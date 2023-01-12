import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById, getRandomProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { Button } from '../../components/Button'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Rating } from '../../components/Rating'
import { SingleProduct } from '../../components/SingleProduct'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { StyledPaper } from './styled'

export const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductDto>()
  const [randomProduct, setRandomProduct] = useState<ProductDto[]>()
  const [quantity, setQuantity] = useState(0)
  // const { rating, name, imageUrl, price, id, new } = product
  const param = id ? id : ''

  useEffect(() => {
    Promise.all([getProductById(param) /* getRandomProducts('', 4)*/])
      .then(([product /* , randomProducts*/]) => {
        setProduct(product)
        // setRandomProduct(randomProducts)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleQuantity = (q: number) => {
    console.log(quantity)
    setQuantity(quantity + q)
  }

  return (
    <div>
      {!product && <Loader />}
      {product && (
        <StyledPaper>
          <SingleProduct
            src={product.imageUrl}
            alt={product.name}
            name={product.name}
            rating={product.rating}
            price={`${product.price.type} ${product.price.value}`}
          />
          <Rating value={product.rating} />
          <Text>{product.description}</Text>
          <Stack centered>
            <Button
              iconBgColor="primary"
              iconColor="backgroundDark"
              icon="shopBag"
              bgColor="backgroundDark"
              color="textInverse"
            >
              Add to cart
            </Button>
            <QuantitySelector onClick={handleQuantity} quantity={quantity} />
          </Stack>
          <Grid>
            {randomProduct &&
              randomProduct.map((r) => (
                <ProductCard
                  key={r.id}
                  id={r.id}
                  imgSrc={r.imageUrl}
                  name={r.name}
                  rating={r.rating}
                  price={`${r.price.type} ${r.price.value}`}
                />
              ))}
          </Grid>
        </StyledPaper>
      )}
    </div>
  )
}
