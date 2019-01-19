import '../styles/index.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'

import React, { Component } from 'react'

class App extends Component{ 
    state = {
        menuOpen: false
    }
    
    displayMenu = () => {
        this.setState(({ menuOpen }) => ({ menuOpen : !menuOpen }))
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
            <Header displayMenu={this.displayMenu} menuOpen={this.state.menuOpen} />
            <main className={`main ${this.state.menuOpen ? 'main-animate' : ''}`}>
                <Main />
                <About />
                <Skills />
            </main>
        </div>
    )
    }
}

// const App = () =>
//     <div>
//         <Head>	  
//           <title>Rafael Portfolio</title>
//           <meta charSet="utf-8"/>
//           <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         </Head>
//         <Header />
//         <main>
//             <Main />
//             <About />
//             <Skills />
//         </main>
//     </div>


export default App