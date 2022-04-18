// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Container } from 'react-bootstrap'
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <title> My next app</title>
      </Head>

      <Container>
        <Menu />
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
