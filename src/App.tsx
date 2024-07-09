import { useEffect } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  const limits = {
    5000: 2,
    2000: 2,
    1000: 3,
    500: 4,
    100: 3,
    50: 2
  }

  useEffect(() => {
    const atm = (price: number, limits: Record<string, number>) => {
      let result = 0

      const keys = Object.keys(limits).sort((a, b) => +b - +a)

      let i = 0

      while (result < price && i < keys.length) {
        if (((result + +keys[i]) > price) || limits[keys[i]] === 0) {
          i++
        } else {
          result += +keys[i]
          limits[keys[i]]--
        }
      }

      if (result < price) return 'sorry'

      return result
    }

    console.log(atm(450, limits))
    console.log(limits)
  }, [])

  return (
    <>
      <Header/>
      <main className="md:pt-[201px] pt-[154px]">
        <Home/>
      </main>
      <Footer/>
    </>
  )
}

export default App
