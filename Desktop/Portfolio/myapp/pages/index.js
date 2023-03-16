import { Inter } from 'next/font/google'
import NavBar from './Component/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <h1 className='text-center' style={{ marginTop:"10%",fontFamily:"Copperplate" }}><strong>Forntend Developer & ChatBot Developer</strong></h1>
      <p className='text-center my-4 mx-4' style={{fontFamily:"Chalkduster"}}>React-ing like there's no tomorrow: How I learned to stop worrying and love the component lifecycle!</p>
    </>
  )
}
