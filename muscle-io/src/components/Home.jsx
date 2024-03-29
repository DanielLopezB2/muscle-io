import Header from "./Header"
import CardInfo from "./CardInfo"
import SearchBar from "./SearchBar"
import Footer from "./Footer"

function Home() {
    return (
        <div className="inset-0 -z-10 w-full flex flex-col items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

            <Header />
            <SearchBar />
            <CardInfo />
            <Footer />
     
        </div>
    )
}

export default Home