import Header from "./components/Header"
import CardInfo from "./components/CardInfo"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"
import SearchResults from "./components/SearchResults"

function App() {
  
  return (
    <div className="inset-0 -z-10 w-full flex flex-col items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <Header />
      <CardInfo />
      <SearchBar />
      <Footer />
     
    </div>
  )
}

export default App