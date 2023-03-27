import React from 'react'
import Image from 'next/image'
function Post() {
  
    const json={
        "id": 2,
        "avatar": "https://reqres.in/img/faces/2-image.jpg",
        "email": "janet.weaver@reqres.in",
        "email": "janet.weaver@reqres.in",
        "first_name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "last_name": "Weaver",
        "email": "janet.weaver@reqres.in",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }
    function createHtmlTags(json) {
      const htmlTags = [];
      // for (let)}
    }
    const htmlTags = createHtmlTags(json);
  return (
    <>
    <div className='container'>
   <h1 className='text-center'>{json.email}</h1>
   <p className='my-5'>{json.first_name}</p>
   <div className=' d-flex justify-content-center'>
   <Image src="/favicon.ico" width = {600} height = {400}/>
   </div>
   <p className='my-5'>{json.first_name}</p>
   <div className=' d-flex justify-content-center'>
   <Image src="/favicon.ico" width = {600} height = {400}/>
   </div>
   <p className='my-5'>{json.first_name}</p>
   </div>

   {json.email?<h1>{json.email}</h1>:null}
   {json.first_name?<h1>{json.first_name}</h1>:null}
   {htmlTags}
    </>
  )
}

export default Post