import { useEffect, useState } from 'react'
import { getProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'

export const Products = () => {
  const [data, setData] = useState<ProductDto[]>([])
  const [loading, setLoading] = useState(true)

  const getData = (prod: ProductDto[]) => {
    setData(prod)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
      .then((prod) => {
        getData(prod)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {loading && <Loader />}
      {data && (
        <div>
          {data.map((p, i) => (
            <ProductCard
              key={i}
              imgSrc={p.imageUrl}
              name={p.name}
              rating={p.rating}
              price={`${p.price.type} ${p.price.value}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
