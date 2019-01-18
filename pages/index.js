import '../styles/index.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'

const App = () =>
    <div>
        <Head>	  
          <title>Rafael Portfolio</title>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <main>
            <Main />
            <About />
            <Skills />
        </main>
    </div>

export default App