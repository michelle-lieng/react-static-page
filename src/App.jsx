import MainContent from "./components/MainContent.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

function App() {
    return (
      <>
        <div id="container">
            <Navbar />
            <MainContent />
        </div>  
        <Footer />
      </>  
    )
}

export default App