import './Effects.css'
import encriptador from '../../image/projects/encriptador.png' 
import oasis1 from '../../image/projects/oasisfrutal1.png' 
import portfolio1 from '../../image/projects/portfolio1.png' 
import muebleriaexpress from '../../image/projects/muebleriaexpress.png' 
import planet from '../../image/icons/planet.png' 

const ProjectsCarrousel = () => {

  setTimeout(()=>{
    
    let radius = 150
    let autoRotate = true
    let rotateSpeed = -60
    let imgWidth = 15
    let imgHeight = 30
  
    let odrag = document.getElementById('drag')
    let ospin = document.getElementById('spin')
    let aImg = ospin.getElementsByTagName('img')
    let aEle = [...aImg]
  
    ospin.style.width = imgWidth + 'rem'
    ospin.style.height = imgHeight + 'vh'
  
    let ground = document.getElementById('ground')
    ground.style.width = radius *3 + 'px'
    ground.style.height = radius *3 + 'px'
  
    const init = () =>{
      aEle.forEach((e,index)=>{
        e.style.transform = "rotateY("+ (index * (360 / aEle.length)) + "deg) translateZ("+radius+"px)"
        e.style.transition = 'transform 1s'
        e.style.transitionDelay =(aEle.length - index) / 4 + "s"
      })
    }
  
    setTimeout(init,1000)

    const applyTransform = (obj) =>{
      if (tY> 180) tY= 180
      if (tY <0) tY= 0
      obj.style.transform = "rotateX("+(-tY)+"deg) rotateY("+(tX)+"deg)"
    }

    const playSpin = (yes) =>{
      ospin.style.animationPlayState = (yes ? "running" : "paused")
    }

    var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10

    if (autoRotate){
      let animationName = (rotateSpeed>0 ? "spin" : "spinRevert")
      ospin.style.animation = `
      ${animationName} ${Math.abs(rotateSpeed)}s infinite linear`
    }

    document.onpointerdown = function(e){
      clearInterval(odrag.timer)
      e = e || window.event
      
      var sX = e.clientX,
          sY = e.clientY
  
      this.onpointermove = function (e){
        e = e || window.event
        
        var nX = e.clientX,
            nY = e.clientY
  
        desX = nX - sX
        desY = nY - sY  
        tX += desX * 0.1
        tY += desY * 0.1
        
        applyTransform(odrag)
  
        sX = nX
        sY = nY
      }
  
      this.onpointerup = function (e){
        odrag.timer = setInterval(function(){
          desX *=0.95
          desY *= 0.95
          tX += desX * 0.1
          tY += desY * 0.1
  
          applyTransform(odrag)
  
          playSpin(false)
  
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
            clearInterval(odrag.timer)
            playSpin(true)
          }
        },17)
        this.onpointermove = this.onpointerup = null
      }
    }
    return false

  },1000)


  return (
    <div className='w-screen h-screen mx-auto'>   
      <div className=' h-[28vh]'><p className='w-4/5 pb-2 mx-auto text-3xl font-thin text-center text-gray-100 border-b border-gray-400 lg:text-4xl'>Practice Projects</p></div>
      <div id="drag" >
        <div id="spin" >
          <img className='object-cover' src={encriptador}></img>
          <img className='object-cover' src={oasis1}></img>
          <img className='object-cover' src={portfolio1}></img>
          <img className='object-cover' src={muebleriaexpress}></img>
        </div>
      </div>
      <div id="ground"></div>
    </div>
  )
}
export default ProjectsCarrousel