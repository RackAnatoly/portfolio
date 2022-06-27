import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Skills} from './skills/Skills';
import {Works} from "./Works/Works";
import {Hire} from "./Hire/Hire";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {About} from "./About/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Works/>
            {/*<Hire/>*/}
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App;
