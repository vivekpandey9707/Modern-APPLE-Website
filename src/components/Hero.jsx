import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import { heroVideo,smallHeroVideo } from '../utils'


const  Hero =()=> {
   useGSAP(()=>{
gsap.to("#hero",{ opacity:1, delay:1.5})
gsap.to("#cta",{opacity:1, y:-20, delay:1.5})
},[])


   const[videosrc,setvideosrc]=useState(window.innerWidth<760? smallHeroVideo:heroVideo)
   // If your video is not updating correctly when resizing the screen using
   //  the useEffect method, it might be because the effect runs only once during the component mount,
   //  and does not handle window resize events. To fix this, you need to ensure that the video source
   //  is updated not only on initial render but also whenever the window is resized.



//   useEffect(()=>{
//    if (window.innerWidth<760) {
//       setvideosrc(smallHeroVideo)
      
//    } else {
//       setvideosrc(heroVideo)
      
//    }
// },[])
// foruper use niche likha hai
// No Resize Handling:Yeh code only initial render ke time par execute hota hai. Agar user window ko resize 
// karta hai, to videoSrc update nahi hota, kyunki resize event ko handle nahi kiya gaya hai.
// Static Handling:Agar screen size change hota hai (e.g., user window ko resize karta hai), to video 
// source automatically update nahi hota. Yeh approach static setup ke liye theek hai,
//  lekin dynamic responsiveness ke liye nahi.





const handleVideoSrc=()=>{
   if (window.innerWidth<760) {
      setvideosrc(smallHeroVideo)
      
   } if (window.innerWidth>760) {
      setvideosrc(heroVideo)
      
   } else {
      console.log("error");
      
   }
}

useEffect(()=>{
   handleVideoSrc()
},[handleVideoSrc])
// humko ye jana ki agar hume ki video size cghoti ye badi karni toh usee effecr nahi karega window pe kohi comaand todi use ho rahi hum addEventListener dalan ajisme reszie hoke toh 
// jab screen badhi ye choti karna eevent lagna  yese use effect karge nhai fayda

useEffect(()=>{
   window.addEventListener("resize",handleVideoSrc)

   return()=> window.removeEventListener('rese',handleVideoSrc)
},[])

  return (
   <section className='  w-full  pt-16  bg-black relative'>

{/* Here's how justify-content: center; works:

Horizontal Centering: When the flex-direction is row, justify-content:
 center; centers the flex items horizontally within the flex container.

Vertical Centering: When the flex-direction is column, justify-content: center; 
centers the flex items vertically within the flex container. */}
   <div className=' h-5/6 w-full  flex-center flex-col' >
<p id='hero'  className='hero-title'>Iphone 15 pro</p>
<div className=" md:w-10/12 w-9/12">
      <video autoPlay muted playsInline={true} key={videosrc} >
         <source src={videosrc} type='video/mp4'></source>
      </video>
   </div>
  


   </div>
   <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>

  


   </section>
  )

}
export default Hero



// Dynamic Content: Agar aapko content ko window width ke adhar par dynamically change karna hai, 
// jaise ki video source ko adjust karna based on screen size,
//  tab window object ka use zaroori hai. Yeh dynamically detect karta hai ki
//   screen width kya hai aur uske adhar par content ko update karta hai.

// Responsive Design: CSS media queries ka use aapke element ki styling ko responsive banane ke liye hota hai.
//  Yeh automatically adjust hota hai jab screen width change hoti hai, bina JavaScript ki zaroorat ke.

// Component Behavior: Agar aapka component behavior (jaise ki video source) screen size ke adhar par change hota hai aur yeh CSS
//  ke saath handle nahi kiya ja sakta, tab window object ka use useful hota hai.
