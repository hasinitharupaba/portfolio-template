import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import 'styles/common.scss'
import 'styles/tailwind.scss'
import 'styles/typography.scss'
import 'styles/override.scss'
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio Photography</title>
        <meta name='Meliora lifestyle photography' content='initial-scale=1, width=device-width' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
