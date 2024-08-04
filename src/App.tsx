import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stopwatch from '@/components/Stopwatch'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main id="app-main">
        <Stopwatch />
      </main>

      <Footer />
    </>
  )
}

export default App
