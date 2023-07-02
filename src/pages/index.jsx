import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Offerings from '@/components/Offerings'

export default function Home() {
  return (
    <>
      <Head>
        <title>BanklessDAO InfoSec - Web security done right</title>
        <link rel="icon" href="/favicon.webp" />
        <meta
          name="description"
          content="Web3 security and infrastructure management for blockchain and cryptocurrency organization."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <Offerings />
      </main>
      <Footer />
    </>
  )
}
