import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { useState } from 'react'
import { HeroSection } from 'components/HeroSection'
import { MyServices } from 'components/MyServices'
import { MyProjects } from 'components/MyProjects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const servicesData = [
    {
      id: 0,
      image: '/icons/icon-01.svg',
      heading: 'Weddings',
      description:
        'Portraying the splendor and emotions of your special day through timeless, romantic photography.',
    },
    {
      id: 0,
      image: '/icons/icon-02.svg',
      heading: 'Engagements',
      description: `Telling each couple's story in a unique and creative way. Bringing joy and love to life one frame at a time.`,
    },
    {
      id: 0,
      image: '/icons/icon-03.svg',
      heading: 'Casual shoots',
      description:
        'Capturing genuine moments and candid interactions to create the most stunning outcomes.',
    },
  ]

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
