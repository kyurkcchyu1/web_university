import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer";
import {observer} from 'mobx-react-lite'
import Store from './Store'
import CarsPage from "./components/CarsPage";
import LogIn from "./components/LogIn";
import SubHeader from "./components/SubHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App: React.FC = observer(() => {
    const [showLogin, setShowLogin] = useState(false)

    useEffect(() => {
        if (Store.data.length === 0) {
            Store.setItems()
        }
    })
    return (

        <BrowserRouter>
            <Header exit = {() => setShowLogin(false)} showLogin = {showLogin}/>
            <Routes>
                <Route path = "/" element = {<SubHeader/>}/>
                <Route path = "/cars" element = {<CarsPage/>}/>
                <Route path = "/login" element = {<LogIn loginChange = {() => setShowLogin(true)}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
})
export default App
