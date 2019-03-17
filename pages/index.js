import React, { Component } from 'react'
import _ from 'lodash'

import '../styles/index.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Landing from '../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import lg  from './../data'

class App extends Component{ 

    state = {
        isMenuOpen: false,
        lg: lg.en,
        indexOfIntroOpened : -1,
        windowSmaller620px: false,
        scrollY: 0
    }

    constructor(props) {
        super(props)
        this.storeScrollY = _.throttle(this.storeScrollY.bind(this), 100)
      }
    
      storeScrollY() {{
          if(window.scrollY !== this.state.scrollY) 
            this.setState(() => ({ scrollY: window.scrollY }))
        }
      }
    
    toggleLanguage = (e) => {
        e.persist()
        this.setState(() => ({ lg: lg[e.target.value] }))
    } 

    // if isMenuOpen changes, elements will translate properly
    displayMenu = () => {
        this.setState(({ isMenuOpen }) => ({ isMenuOpen : !isMenuOpen }))
    }

    resize = () => {
        if(window.innerWidth < 620 && !this.state.windowSmaller620px) {
            this.trackScrollToSetOpenIntroBox()
        }

        if(window.innerWidth >= 620 && this.state.windowSmaller620px) {
            this.trackScrollToSetOpenIntroBox(false)
        }
    }

    componentDidMount() {
        const language = localStorage.getItem('lg')
        if(language) {
            this.setState(() => ({lg: lg[language]}))
        }

        if(typeof(window) === 'undefined') { return }
        this.storeScrollY()

        window.addEventListener("scroll", this.storeScrollY)

        window.onload = () => {

            if(window.innerWidth < 620) {
                this.trackScrollToSetOpenIntroBox()
            }
            //on resize: verifies if boundary width is passed. if so trackScroll is invoked
            window.addEventListener('resize', this.resize)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.storeScrollY)
        window.removeEventListener('resize', this.resize)
      }

    trackScrollToSetOpenIntroBox = (track = true) => {
        const intros = [...document.querySelectorAll('.intro')]
        const mapScrollYs = intros.map(intro => {
            return {
                top: intro.getBoundingClientRect().top + window.scrollY,
                bottom: intro.getBoundingClientRect().bottom + window.scrollY,                    
            }
        
        })
        this.setIndexOfIntroOpened(mapScrollYs)

        //bellow: we need a named function so it is removable from listener event
        // we remove if window resizes to a width where 'scroll' event is no longer wanted to be listened
        const that = this
        function setIndex() {
            const intros = [...document.querySelectorAll('.intro')]

            // why add window.scrollY: so we get el position relative to the top, indepedent of the initial page scroll
            // afterwards we use only window.scrollY to compare these values
            const mapScrollYs = intros.map(intro => {
            return {
                top: intro.getBoundingClientRect().top + window.scrollY,
                bottom: intro.getBoundingClientRect().bottom + window.scrollY,                    
                }
        
            })
            that.setIndexOfIntroOpened.call(that, mapScrollYs)
        }

        // verifies if 'scroll' event listener should be added or not
        if(!track) {
            window.removeEventListener('scroll', setIndex)
            this.setState(() => ({windowSmaller620px : false}))
        } else {
            window.addEventListener('scroll', setIndex)
            this.setState(() => ({windowSmaller620px : true}))
        }
    }

    setIndexOfIntroOpened = (mapScrollYs) => {
        // here we find if an element is on a frame where should be displayed, hence animating its intro child tag
        const openIntroIndex = mapScrollYs.findIndex(scrollY => window.scrollY > scrollY.top - window.innerHeight/2 && window.scrollY < scrollY.bottom - window.innerHeight/2)

        // we check if the one found is different from the value from state
        if (openIntroIndex !== this.state.indexOfIntroOpened ) {
            this.setState(() => ({ indexOfIntroOpened: openIntroIndex }))
        }
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
            <Header 
                displayMenu={this.displayMenu} 
                isMenuOpen={this.state.isMenuOpen} 
                text={lg.header} />

            <main className={`main ${this.state.isMenuOpen ? 'main-animate' : ''}`}>
                <Landing toggleLanguage={this.toggleLanguage} text={lg.landing} />
                <About      
                    text = {lg.about}
                    isIntroOpen={this.state.indexOfIntroOpened === 0}
                 />
                <Skills     
                    text = {lg.skills}
                    isIntroOpen={this.state.indexOfIntroOpened === 1}
                    scrollY={this.state.scrollY}
                />
                <Projects   
                    text = {lg.projects}
                    isIntroOpen={this.state.indexOfIntroOpened === 2}
                />
            </main>
            <Footer text={lg.footer} isMenuOpen={this.state.isMenuOpen} />
        </div>
        )
    }
}

export default App