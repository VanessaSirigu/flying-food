type Config = {
  baseURL: string
  apiKey?: string
}

export const createApiClient = ({ baseURL, apiKey }: Config) => {
  const headers = apiKey ? { 'x-api-key': apiKey } : undefined
  return {
    async get<Res>(resource: string) {
      const res = await fetch(`${baseURL}/${resource}`, {
        headers
      })
      return res.json() as Res
    },
    async post(resource: string) {
      const res = await fetch(`${baseURL}/${resource}`, {
        method: 'POST',
        body: '',
        headers
      })
      return res.json()
    }
  }
}

export const apiClient = createApiClient({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
  apiKey: process.env.REACT_APP_API_KEY
})

// export const createApiClient = (config: Config) => {
//   return {
//     get(resource: string) {
//      return fetch(`${config.baseURL}/${resource}`).then((res) => res.json())
//     }
//   }
// }
