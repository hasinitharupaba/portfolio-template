import AOS from 'aos'
import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'

import 'styles/tailwind.scss'
import 'remixicon/fonts/remixicon.css'
import 'styles/typography.scss'
import 'styles/override.scss'
import 'styles/common.scss'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {
  /* AOS */
  const router = useRouter()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio Photography</title>
        <meta name='portfolio' content='initial-scale=1, width=device-width' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
