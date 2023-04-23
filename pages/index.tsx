import Head from 'next/head'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { HeroSection } from 'components/HeroSection'
import { MyServices } from 'components/MyServices'
import { MyProjects } from 'components/MyProjects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Freya Abby</title>
        <meta name='Home' content='portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />
      </Head>
      <div>
        <Header />
        <HeroSection />
        <MyServices />
        <MyProjects />
        <Footer />
      </div>
    </>
  )
}
