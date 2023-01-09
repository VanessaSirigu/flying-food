import { apiClient } from './client'
import { ProductDto } from './types'

export const getProducts = () => apiClient.get<ProductDto[]>('products')

export const getProductById = (id: string) => apiClient.get<ProductDto>(`products/${id}`)
