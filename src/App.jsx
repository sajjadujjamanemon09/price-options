import './App.css'
import LineChart from './componants/LineChart/LineChart'
import Navbar from './componants/Navbar/Navbar'
import Phones from './componants/Phones/Phones'
import PriceOptions from './componants/PriceOptions/PriceOptions'
// import DaisyNav from './componants/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav> </DaisyNav> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
