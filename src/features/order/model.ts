export type Order = {
  userId: string
  items: {
    id: string
    quantity: number
  }[]
}

export type OrderState = {
  orders: Order[]
  loading: boolean
}
