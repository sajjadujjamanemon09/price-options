import './App.css'
import Navbar from './componants/Navbar/Navbar'
import PriceOptions from './componants/PriceOptions/PriceOptions'
// import DaisyNav from './componants/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav> </DaisyNav> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
