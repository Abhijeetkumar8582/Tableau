import NavBar from './NavBar'
import Image from 'next/image'
import SideNavBar from './SideNavBar'
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import Notification from './Notification'


export default function Home() {
  const [alert, setalert] = useState(false)

    setTimeout(function () {
        localStorage.removeItem("inbound")
    }, 500000)

    setTimeout(function () {
      setalert(false);
  }, 10000)

  
    useEffect(() => {
      let isPhone = window.matchMedia("(max-width: 768px)").matches;
      // console.log(isPhone)
      const scrolled = window.scrollY
      if (isPhone && scrolled  > 2700 && scrolled < 2750) {
        if (!localStorage.getItem("inbound")) {
          localStorage.setItem("inbound", "Sent");
          setalert(true);
        }}
        window.addEventListener("scroll", () => {
            let k = document.documentElement.scrollHeight
            const scrolled = window.scrollY
            // console.log(scrolled)
             if (scrolled > 1500 && scrolled < 1550) {
                if (!localStorage.getItem("inbound")) {
                    localStorage.setItem("inbound", "Sent");

                    setalert(true);
                }
            }
        })
    })
    

  
  return (
    

    <>
    <Head>
      <title>Home</title>
    </Head>

      <NavBar />
      
      {alert === true ?<Notification/>:null}


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
