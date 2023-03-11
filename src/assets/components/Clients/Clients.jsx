import polleriaNicvardi from'../../image/clients/pollosNicvardi.png'
import oasisFrutal from'../../image/clients/oasisFrutal.png'
import BlackHole from './BlackHole'

import { useEffect } from 'react'

const Clients = () => {

  let orbitingElements= []
  let orbitingList = []

  const animatedOrbitingElements = (element,delay) =>{
    let angle = 0
 
    setTimeout(()=>{
      let orbiting = setInterval(()=>{
        angle += .02
        let x = 9 * Math.cos(angle)
        let y  = 8 * Math.sin(angle)
        element.style.transform = 'translate('+ x +'em,'+ y +'em)';
      },16.7)
      orbitingList.push(orbiting)
    },delay)
  }

  useEffect(() => {
    setTimeout(()=>{
      orbitingElements = document.querySelectorAll('.orbitElement') 
    },1000)

    setTimeout(()=>{  
      animatedOrbitingElements(orbitingElements[0],0)
      animatedOrbitingElements(orbitingElements[1],1000)
    },2000)
  
    return () => {
      orbitingList.forEach(e => clearInterval(e))
    }
  }, [])
  




  return (
    <div className='w-4/5 mx-auto'>
        <p className='w-4/5 pb-2 mx-auto text-3xl font-thin text-center text-gray-100 border-b border-gray-400 lg:text-4xl'>My Clients</p>
        <div className='relative w-full h-[30rem] '>
            <BlackHole/>
            <div className='relative flex items-center justify-center h-full'>
              <img  className='h-[18vh] absolute orbitElement' src={polleriaNicvardi}/>
              <img className='h-[18vh] absolute orbitElement' src={oasisFrutal}/>
            </div>
        </div>

    </div>
  )
}
export default Clients