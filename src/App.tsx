import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stopwatch from '@/components/Stopwatch'
import Textarea from '@/components/Textarea'
import '@/App.css'

function App() {
  return (
    <>
      <Header />

      <main id="app-main">
        <Stopwatch />

        <div className="mx-auto flex w-full flex-col items-center gap-4">
          <Textarea
            className="max-w-80"
            name="te"
            id="tex"
            placeholder="hello textarea"
            full
          >
            Textarea
          </Textarea>

          <Textarea
            className="max-w-80"
            name="ted"
            id="texd"
            placeholder="hello textarea"
            disabled
            full
          >
            Disabled textarea
          </Textarea>

          <Textarea
            className="max-w-80"
            name="ted"
            id="texd"
            placeholder="hello textarea"
            value="readonly value"
            readOnly
            full
          >
            Readonly textarea
          </Textarea>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
