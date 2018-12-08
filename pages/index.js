import Reace ,{ Component } from 'react'
import Head from 'next/head'
import NavbarMain from '../components/navbar'
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends Component {
    render () {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titillium+Web" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                </Head>
                <NavbarMain />
                <p>NEXT</p>
            </div>
        )
    }
}



export default Index