import Header from "./components/Header"
import CardInfo from "./components/CardInfo"

function App() {
  
  return (
    <div className="absolute inset-0 -z-10 h-full w-full flex flex-col items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <Header />

      <CardInfo />

      
      
    </div>
  )
}

export default App