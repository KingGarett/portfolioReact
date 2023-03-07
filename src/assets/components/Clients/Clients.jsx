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
    },1200)
  
    return () => {
      orbitingList.forEach(e => clearInterval(e))
    }
  }, [])
  




  return (
    <div className='w-4/5 mx-auto'>
        <p className='w-3/5 pb-2 mx-auto text-4xl font-thin text-center text-gray-100 border-b border-gray-400'>My Clients</p>
        <div className='relative w-full h-[30rem] pt-10 '>
            <div className='absolute w-24 h-24 bg-white rounded-full top-[50%] left-[50%] transform-origin items-center flex justify-center font-bold '><p className='px-1.5 py-8 text-gray-100 bg-black border border-black rounded-full'>Black Hole</p></div>
            <div className='relative -top-[5%] flex items-center justify-center h-full transform-origint'>
              <img id='cliente1' className='h-[20vh] absolute orbitElement ' src={polleriaNicvardi}/>
              <img id='cliente2' className='h-[18vh] absolute  orbitElement ' src={oasisFrutal}/>
            </div>
        </div>
        <BlackHole/>
    </div>
  )
}
export default Clients