import Head from 'next/head'
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Clinify INC</title>
        <meta name='keywords' content='' />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;