import { Inter } from 'next/font/google'
import Home from './Component/Home'

const inter = Inter({ subsets: ['latin'] })

export default function IndexFile() {
  return (
    <>
     <Home/> 
    </>
  )
}
