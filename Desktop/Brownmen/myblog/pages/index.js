import Head from 'next/head'
import Image from 'next/image';

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    fetch('https://reqres.in/api/users?page=2')
    .then((response)=>response.json())
    .then((data)=>{
      setAPIS(data.data)
    })
  })
  const [getAPIS,setAPIS]=useState([])
  return (
   
   <>
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <Image src="/favicon.ico" className="d-block w-100" width={500} height={500} alt="https://imexed"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <Image src="" className="d-block w-100"width={500} height={500} alt="https://imag750&dpr=2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src="" className="d-block w-100"width={500} height={500} alt="https://images.pe750&dpr=2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h1>New Stories</h1>
<div className='container justify-content-center'>
  <div className='row justify-content-center'>
  {getAPIS.map((element,index)=>(
   
   <div className="card mb-3 mx-3" key={index} style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image src="/favicon.ico" width={300} height={300}  alt="..." />

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  
  ))}
  </div>
</div>
   </>
       
  )
}
