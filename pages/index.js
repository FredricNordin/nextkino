import Header from './components/Header'
import Footer from './components/Footer'
import LatestReleases from './components/LatestReleases'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LatestReleases />
      </main>
      <Footer />
    </>
  )
}
