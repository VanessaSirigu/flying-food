import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getProducts, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { FilterItem } from '../../components/Filter'
import { Grid } from '../../components/Grid'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProductDetail } from '../ProductDetail'
import { ProductsHeader } from './ProductsHeader'

export const Products = () => {
  const [products, setProducts] = useState<ProductDto[]>()
  const [tags, setTags] = useState<TagDto[]>([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    Promise.all([getTags(), getProducts()])
      .then(([tags, products]) => {
        setTags(tags)
        setProducts(products)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleFilterClick = (tag: FilterItem) => {
    setSelected(tag.id === selected ? '' : tag.id)
  }

  const filterProducts = selected
    ? products?.filter(({ tags }) => tags.includes(selected))
    : products

  return (
    <div>
      <ProductsHeader
        selected={selected}
        items={tags.filter((tag) => !tag.hidden).map(({ name, id }) => ({ name, id }))}
        onFilterSelect={handleFilterClick}
      />
      {!products && <Loader />}
      {filterProducts && (
        <Grid>
          {filterProducts.map((p, i) => (
            <div>
              <Routes>
                <Route path="products:id" element={<ProductDetail />} />
              </Routes>
              <ProductCard
                key={i}
                id={p.id}
                imgSrc={p.imageUrl}
                name={p.name}
                rating={p.rating}
                price={`${p.price.type} ${p.price.value}`}
              />
            </div>
          ))}
        </Grid>
      )}
    </div>
  )
}
