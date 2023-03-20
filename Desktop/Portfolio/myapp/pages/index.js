import { Inter } from 'next/font/google'
import NavBar from './Component/NavBar'
import Image from 'next/image'
import Contact from './Component/SideNavBar'
import About from './Component/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <Contact/>
      <h1 className='text-center' style={{ marginTop: "15%", fontFamily: "Copperplate" }}><strong>Forntend Developer & ChatBot Developer</strong></h1>
      <p className='text-center my-4 mx-4' style={{ fontFamily: "Chalkduster" }}>React-ing like there's no tomorrow: How I learned to stop worrying and love the component lifecycle!</p>
      <div className='d-flex justify-content-center'>
        <Image src="/mainPage.jpg" alt="Picture of the author" width={350} height={350}></Image>

      </div>
      <div  style={{marginTop:"11%"}}></div>
      <About/>
      <p></p>
     
    </>
  )
}
