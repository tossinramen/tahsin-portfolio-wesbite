import '../styles/globals.css';
import Head from 'next/head';
// Components 
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Router
import { useRouter } from 'next/router';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
// Head


<Head>
  <link rel="icon" href="/icon.png" type="image/png" />
</Head>
export default MyApp;
