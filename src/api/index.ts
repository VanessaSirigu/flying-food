import { apiClient } from './client'
import { ProductDto, TagDto } from './types'

export const getProducts = () => apiClient.get<ProductDto[]>('products')

export const getTags = () => apiClient.get<TagDto[]>('tags')

export const getProductById = (id: string) => apiClient.get<ProductDto>(`products/${id}`)

export const getRandomProducts = (id?: string) => {
  const query = id ? new URLSearchParams({ productId: id }) : ''
  return apiClient.get<ProductDto[]>(`products/random?${query}`)
}
