import React from 'react'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import { rightImg, watchImg } from "../utils"
import Videocarousel from './Videocarousel'


function HighLights() {
  useGSAP(()=>{
    gsap.to("#title",{opacity:1 ,y:0 ,delay:0.5})
    gsap.to('.link', { opacity: 1, y: 0, duration: 1.5, stagger: 0.25 })
  },[])
  return (
    <section id='highlights'  className=' mb-5 w-screen overflow-hidden h-full common-padding  bg-zinc'>

<div className='screen-max-width'>
<div className='mb-12 w-full flex items-end justify-between max-sm:flex max-sm:flex-col max-sm:items-start'>
  <h1 id='title' className='section-heading'> GET the highlights</h1>  
  {/* trasnlate sirf mrror rehta  h1 apne apna div wohi postion liya rahega trasnalte bass word pstion change par in real uski jaga wohi gogi */}
  <div className="flex flex-wrap items-end gap-5   max-sm:flex-col">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event 
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>

</div>

<Videocarousel/>

</div>

    </section>

  )
}

export default HighLights
