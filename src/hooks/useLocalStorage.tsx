import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface IUseLocalStorage<T> {
  key: string,
  defaultValue: T
}

function useLocalStorage<T>({key, defaultValue}: IUseLocalStorage<T>): [T, Dispatch<SetStateAction<T>>] {

  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      } else {
        return defaultValue
      }
    } catch {
        return defaultValue
    }
  })

  useEffect(() => {
    const rowValue = JSON.stringify(value)
    localStorage.setItem(key, rowValue)
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage