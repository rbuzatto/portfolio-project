import '../styles/index.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Landing from '../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

import React, { Component } from 'react'

class App extends Component{ 
    state = {
        isMenuOpen: false
    }
    
    displayMenu = () => {
        this.setState(({ isMenuOpen }) => ({ isMenuOpen : !isMenuOpen }))
    }

    render() {
        return(
        <div>
            <Head>	  
            <title>Rafael Portfolio</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header displayMenu={this.displayMenu} isMenuOpen={this.state.isMenuOpen} />
            <main className={`main ${this.state.isMenuOpen ? 'main-animate' : ''}`}>
                <Landing />
                <About />
                <Skills />
            </main>
            <Footer isMenuOpen={this.state.isMenuOpen} />
        </div>
        )
    }
}

export default App