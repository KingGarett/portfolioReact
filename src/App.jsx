import './App.css'
import Background from "./assets/components/Background"
import Clients from './assets/components/Clients/Clients'
import Presentation from './assets/components/Presentation'
import ProjectsCarrousel from './assets/components/ProjectCarrousel/ProjectsCarrousel'

function App() {

  return (
    <div className="min-h-screen overflow-hidden bg-slate-900">
      <Presentation/>
      <Background/>
      <Clients/>
      <ProjectsCarrousel/>
    </div>
  )
}

export default App
