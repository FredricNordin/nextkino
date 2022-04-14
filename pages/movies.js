import Header from './components/Header'
import Footer from './components/Footer'
import MovieList from './components/MovieList'

export default function movies() {
  return (
    <>
      <Header />
      <main>
        <MovieList />
      </main>
      <Footer />
    </>
  )
}
