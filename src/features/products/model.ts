import { ProductDto } from '../../api/types'

type Product = ProductDto

export type ProductsState = {
  products: Product[]
  currentProduct: Product | null
  relatedProducts: Product[]
  loading: boolean
  error?: string
}
