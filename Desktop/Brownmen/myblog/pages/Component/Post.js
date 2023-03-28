import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import blog from '../JSON/Blog.json'
function Post() {

  const router = useRouter();
  const { pid } = router.query;
  console.log(blog)
  for (let i=0;i<blog.length;i++){
    if(blog[i].id===pid){
      console.log("Found matching blog post:", blog[i]) 
       break; 
  }
  }
  // for (let i = 0; i < blog.length; i++) {
  //   if (blog[i].id === pid) {
  //     console.log("Found matching blog post:", blog[i]);
  //     break;
  //   }
  // }

  
  return (
    <>
     
    </>
  )
}

export default Post