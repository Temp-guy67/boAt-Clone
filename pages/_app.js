import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout';

import { StateContext } from '../context/StateContext';
import { UserProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Layout>
          <Toaster/>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </UserProvider>
  ) 
}

export default MyApp
