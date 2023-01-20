export const first = <T>(array: T[]) => array.at(0)

export const last = <T>(array: T[]) => array.at(-1)

// export function keyBy(array, key) {
//   return array.reduce((acc, item) => {
//     return {
//       ...acc,
//       [item[key]]: item
//     }
//   }, {})
// }
