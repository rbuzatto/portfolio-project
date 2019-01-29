import React, { Component } from 'react'

import '../styles/index.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Landing from '../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import lg  from './../data'


class App extends Component{ 
    state = {
        isMenuOpen: false,
        lg: lg.en,
    }
    
    toggleLanguage = (e) => {
        e.persist()
        this.setState(() => ({ lg: lg[e.target.value] }))
    } 

    displayMenu = () => {
        this.setState(({ isMenuOpen }) => ({ isMenuOpen : !isMenuOpen }))
    }

    render() {

        const { lg } = this.state

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
                <Landing toggleLanguage={this.toggleLanguage} />
                <About text={lg.about} />
                <Skills />
            </main>
            <Footer isMenuOpen={this.state.isMenuOpen} />
        </div>
        )
    }
}

export default App