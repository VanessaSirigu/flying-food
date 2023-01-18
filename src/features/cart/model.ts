import { Product } from '../products/model'

export type CartProduct = {
  prod: Product
  quantity: number
}

export type CartState = {
  products: CartProduct[]
  loading: boolean
  error?: string
}
