import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import FormCar from "./components/FormCar";
import Footer from "./components/Footer";
import {data, ICar} from "./data";

function App() {
    const[cars,setCars] = useState(data)
    const createNewitem = (item : ICar)=>{
        setCars(prevState => [...prevState,item])
        console.log(cars)
    }
  return (
      <div>
        <Header />
        <Content data={cars}/>
          <FormCar createCar={(item:ICar)=>createNewitem(item)} />
          <Footer />
      </div>
  )
}

export default App
