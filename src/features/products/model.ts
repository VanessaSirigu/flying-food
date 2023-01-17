import { ProductDto } from '../../api/types'

export type Product = ProductDto

export type ProductsState = {
  products: Product[]
  currentProduct: Product | null
  relatedProducts: Product[]
  loading: boolean
  error?: string
  selectedTag?: string
}
