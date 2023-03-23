import NavBar from './NavBar'
import Image from 'next/image'
import SideNavBar from './SideNavBar'
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Head from 'next/head'



export default function Home() {
  
  
  return (
    

    <>
    <Head>
      <title>Home</title>
    </Head>

      <NavBar />
      
      


      <SideNavBar />

      <h1 className='text-center' style={{ marginTop: "15%", fontFamily: "Copperplate" }} >
        <strong>Forntend Developer </strong>
      </h1>
      
      <p className='text-center my-4 mx-4' style={{ fontFamily: "Chalkduster" }}>
        React-ing like there's no tomorrow: How I learned to stop worrying and love the component lifecycle!
      </p>


      <div className='d-flex justify-content-center'>
        <Image src="/mainPage.png" alt="Picture of the Coder" width={350} height={350}/> 
      </div>

      <div style={{ marginTop: "11%" }}></div>

      <About />

      <div style={{ marginTop: "11%" }}></div>

      <Experience />

      <div style={{ marginTop: "11%" }}></div>

      <Project />

      <Head>
      <title> ABHI | Home</title>
    </Head>

    </>
  )
}
