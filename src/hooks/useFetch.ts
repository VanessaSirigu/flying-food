import { useState, useEffect } from 'react'

export const useFetch = <T>(func: () => Promise<T>) => {
  const [resource, setResource] = useState<T>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    func()
      .then(setResource)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { loading, resource }
}
