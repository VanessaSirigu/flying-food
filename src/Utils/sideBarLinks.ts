import { IconName } from '../components/Icon'

export type ItemConfig = {
  id: number
  category: string
  links: { icon: IconName; tag: string }[]
}

export const sideBarLinks: ItemConfig[] = [
  {
    id: 1,
    category: 'menu',
    links: [
      {
        icon: 'burger',
        tag: 'burger'
      },
      {
        icon: 'pizza',
        tag: 'pizza'
      },
      {
        icon: 'sushi',
        tag: 'sushi'
      },
      {
        icon: 'cake',
        tag: 'desserts'
      },
      {
        icon: 'cocktail',
        tag: 'beverages'
      },
      {
        icon: 'soup',
        tag: 'soups'
      },
      {
        icon: 'cheesecake',
        tag: 'cheesecakes'
      },
      {
        icon: 'iceCream',
        tag: 'ice cream'
      },
      {
        icon: 'salad',
        tag: 'salads'
      },
      {
        icon: 'vegetable',
        tag: 'vegetables'
      },
      {
        icon: 'fruit',
        tag: 'fruits'
      }
    ]
  },
  {
    id: 2,
    category: 'services',
    links: [
      {
        icon: 'personal',
        tag: 'personal'
      },
      {
        icon: 'map',
        tag: 'map'
      },
      {
        icon: 'delivery',
        tag: 'delivery'
      },
      {
        icon: 'reward',
        tag: 'awards'
      },
      {
        icon: 'bonus',
        tag: 'bonuses'
      }
    ]
  }
]
