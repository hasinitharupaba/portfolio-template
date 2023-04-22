import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import 'styles/common.scss'
import 'styles/tailwind.scss'
import 'styles/typography.scss'
import 'styles/override.scss'
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>Meliora Lifestyle Weddings Photography</title>
        <meta name='Meliora lifestyle photography' content='initial-scale=1, width=device-width' />
      </Head>
      {/* Google tag (gtag.js) */}

      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
