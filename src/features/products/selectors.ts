import type { RootState } from '../store'

export const selectProducts = (state: RootState) => state.products.products

export const selectTagsSelected = (state: RootState) => state.tags.selectedTag

export const selectFilteredProducts = (state: RootState) => {
  const { products, tags } = state
  if (!tags.selectedTag) return []
  return products.products.filter((p) => p.tags.includes(tags.selectedTag!))
}

export const selectRelatedProducts = (state: RootState) => state.products.relatedProducts

export const selectProduct = (state: RootState) => state.products.currentProduct
