import { ProductCard } from '../../components/ProductCard'

export const Homepage = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <ProductCard
        imgSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        rating={2}
        isAvailable
        price="4.50"
      />
    </div>
  )
}
