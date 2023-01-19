import { DeliveryDto } from '../../api/types'

export type Delivery = DeliveryDto

export type DeliveryState = {
  deliveries: Delivery[]
  loading: boolean
}
