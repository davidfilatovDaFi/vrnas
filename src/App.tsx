import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header/>
      <main className="md:pt-[201px] pt-[154px]">
        <Home/>
      </main>
    </>
  )
}

export default App
