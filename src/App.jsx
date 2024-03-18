
import { BrowserRouter } from 'react-router-dom'
import Navbar from './cmpnts/Navbar'
import Hero from './cmpnts/Hero'
import Details from './cmpnts/Details'
import Program from './cmpnts/Program'
import Contacts from './cmpnts/Contacts'


function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 black-gradient'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/> 
          <Hero/>
        </div>
        <Details/>
        <Program/>
        <Contacts/>

      </div>
    </BrowserRouter>
    
  )
}

export default App
