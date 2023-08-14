import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import UserContext from './Context/UserContext'


function App() {
  return (
    <UserContext>
      <Navbar/>
      <div className='max-w-6xl ml-auto mr-auto'>
      <Hero/> 
      </div>
    </UserContext>
     
  )
}

export default App
