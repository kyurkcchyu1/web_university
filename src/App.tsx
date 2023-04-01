import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer";
import {observer} from 'mobx-react-lite'
import CarsPage from "./components/CarsPage";
import LogIn from "./components/LogIn";
import SubHeader from "./components/SubHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/About'
import useStore, {StoreProvider} from "./Store/useStore";


const App: React.FC = observer(() => {
    const [showLogin, setShowLogin] = useState(false)
    const carsStore = useStore();
    useEffect(() => {
        if (carsStore.data.length === 0) {
            carsStore.setItems()
        }
    })

    return (
        <BrowserRouter>
            <Header exit = {() => setShowLogin(false)} showLogin = {showLogin}/>
            <Routes>
                <Route path = "/" element = {<SubHeader/>}/>
                <Route path = "/cars" element = {<CarsPage/>}/>
                <Route path = "/login" element = {<LogIn loginChange = {() => setShowLogin(true)}/>}/>
                <Route path = "/about" element = {<About/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
})
export default App;
