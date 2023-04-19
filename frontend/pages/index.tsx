import Image from 'next/image'
import { Inter } from 'next/font/google'
import SwapForm from '@/components/form'
import Head from 'next/head'



export default function Home() {
  return (<>
    <Head>
    <title>MockS</title>
    <meta name="description" content="Your go-to Api testing Toolkit" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
<SwapForm/>
</>
  )
}
