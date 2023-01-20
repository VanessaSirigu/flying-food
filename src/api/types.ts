export type ValueType = {
  type: string
  value: number
}

export type ProductDto = {
  discountRate: number | null
  size: ValueType
  available: boolean
  rating: number
  stock: number
  delivery: string
  name: string
  imageUrl: string
  description: string
  price: ValueType
  id: string
  new: boolean
  tags: string[]
}

export type TagDto = {
  name: string
  id: string
  namePlural: string
  hidden?: boolean
}

export type DeliveryDto = {
  id: string
  name: string
}

export type OrderDto = {
  userId: string
  items: { id: string; quantity: number }[]
}

export type CreateOrderRes = { message: string; orderId: string }
