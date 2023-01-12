import React, { useState } from 'react'
import { IconButton } from '../Button'
import { Stack } from '../Stack'
import { Text } from '../Text'

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0)

  return (
    <Stack centered>
      <IconButton
        outlined
        bgColor="background"
        icon="minus"
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0))}
      />
      <Text>{quantity}</Text>
      <IconButton
        bgColor="backgroundDark"
        color="textInverse"
        icon="plus"
        onClick={() => setQuantity(quantity + 1)}
      />
    </Stack>
  )
}
