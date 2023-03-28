import React from 'react';
import blog from '../JSON/Blog.json'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Category() {
    const router = useRouter()

    const handleCLick = (id) => {
        console.log(id)
        router.push({
            pathname: '/Component/Post',
            query: { pid: id },

        })
    }
    return (
        <>
            <div className='container flex-wrap my-5 '>
                <h1>Fitness</h1>
                <div className='row mx-4 my-3 '>
                    {blog.map((element, index) => (
                        <div className='col-md-3 my-3 ' key={index}>
                            <Link href='#' onClick={() => handleCLick(element.id)} style={{ textDecoration: "none" }}>
                                <div className="card" style={{ maxWidth: "18rem", width: "100%", maxHeight: "400px", height: "100%" }}>
                                    <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h6>{element.by}</h6>
                                        <h4 className="card-text">{element.title}</h4>
                                        <p>{element.reviewed}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category