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
    async post<Res, Body>(resource: string, data: Body) {
      const res = await fetch(`${baseURL}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
      })
      return res.json() as Res
    }
  }
}

export const apiClient = createApiClient({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
  apiKey: process.env.REACT_APP_API_KEY
})
