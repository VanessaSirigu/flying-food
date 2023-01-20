import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { selectSelectedTag, selectVisibleTags } from '../tags/selector'

export const selectProductsState = (state: RootState) => state.products

export const selectProducts = createSelector(selectProductsState, (p) => p.products)

export const selectTagsSelected = createSelector(
  selectSelectedTag,
  (selectedTag) => selectedTag
)

export const selectFilteredProducts = createSelector(
  selectSelectedTag,
  selectProducts,
  (selectedTag, products) => {
    if (!selectedTag) return []
    return products.filter((p) => p.tags.includes(selectedTag))
  }
)

export const selectProduct = createSelector(
  selectProductsState,
  (products) => products.currentProduct
)

export const selectRelatedProducts = createSelector(
  selectProductsState,
  (p) => p.relatedProducts
)

export const selectProductTags = createSelector(
  selectVisibleTags,
  selectProduct,
  (tags, product) => tags.filter(({ id }) => product?.tags.includes(id))
)
