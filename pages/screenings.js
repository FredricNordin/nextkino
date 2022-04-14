import Header from './components/Header'
import Footer from './components/Footer'
import ScreeningsList from './components/ScreeningsList'


export default function screenings() {
  return (
    <>
      <Header />
      <main>
        <ScreeningsList />
      </main>
      <Footer />
    </>
  )
}