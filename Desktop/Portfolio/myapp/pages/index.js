import { Inter } from 'next/font/google'
import Head from 'next/head'
import Home from './Component/Home'

const inter = Inter({ subsets: ['latin'] })

export default function IndexFile() {
  return (
    <>
     <Head>
        <title>Home</title>
      </Head>
     <Home/> 
    </>
  )
}
