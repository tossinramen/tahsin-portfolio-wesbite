import '../styles/globals.css';

import Layout from '../components/Layout';

//components 
function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}

export default MyApp;
