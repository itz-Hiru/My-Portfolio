import React from "react";
import Header from './components/header/Header.component';
import Home from './components/home/Home.component';
import About from './components/about/About.component';

const App = () => {
    return (
        <>
        <Header />
        <main className="main">
            <Home />
            <About />
        </main>
        </>
    )
}

export default App;