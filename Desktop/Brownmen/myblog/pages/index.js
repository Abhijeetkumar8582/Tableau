import Head from 'next/head'
import Image from 'next/image';
import blog from './JSON/Blog.json'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => {
        setAPIS(data.data)
      })
  })
  const [getAPIS, setAPIS] = useState([])
  return (

    <>

  {/* Carousel display */}
  <div className='container'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://imexed" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://imag750&dpr=2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://images.pe750&dpr=2" />
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
      </div>
{/* Fitnes display */}

      <div className='container flex-wrap '>
        <h1>Fitness</h1>
        <div className='row mx-4 my-3 '>
          {blog.slice(0,8).map((element, index) => (
            <div className='col-md-3 my-3 ' key={index}>
              <a href='/' style={{ textDecoration: "none" }}>
              <div className="card" style={{ maxWidth: "18rem", width: "100%", maxHeight: "400px", height: "100%" }}>
                <img src={element.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6>{element.by}</h6>
                  <h4 className="card-text">{element.title}</h4>
                  <p>{element.reviewed}</p>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>

{/* Spotlight display */}
      <div className='Spotlight'>
        <div className='container flex-wrap '>
          <h1>Spotlight</h1>
          <div className='row mx-4 my-3 '>
            {getAPIS.slice(0, 4).map((element, index) => (
              <div className='col-md-3 my-3 ' key={index}>
                 <a href='/' style={{ textDecoration: "none" }}>
                <div className="card" style={{ maxWidth: "18rem", width: "100%", maxHeight: "400px", height: "100%" }}>
                  <img src={element.avatar} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


{/* Fit display */}
      <div className="container ">
        <h1>Fit</h1>
        <div className="row mx-3 ">
          <div className="col-auto my-3 " >
          <a href='/' style={{ textDecoration: "none" }}>
            <div className="card" style={{ maxWidth: "50rem", width: "100%" }}>
              <img className="" src="/favicon.ico" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            </a>
          </div>

          <div className="col">
            <div className="row my-3">
              {getAPIS.slice(0, 4).map((element, index) => (
                <div className="col-md-6 mb-4 " key={index}>
                   <a href='/' style={{ textDecoration: "none" }}>
                  <div className="card" style={{ maxWidth: "18rem", width: "100%", maxHeight: "400px", height: "100%" }}>
                    <img className={element.avatar} src={element.avatar} alt="Card " />
                    <div className="card-body">
                      <p className="card-text">ome quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                  </div></a>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




    </>

  )
}
