import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
import Home from './pages/home/Home'



function App() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center">

    {/* DIV FLUTUANTE CENTRALIZADA */}
        <div className="flex flex-col w-full max-w-[600px]
                    rounded-3xl shadow-2xl p-6 border-b-black border">
          <Navbar />
          <Home />
          <Footer />
        </div>
    </div>
       
    </>
  )
}

export default App
