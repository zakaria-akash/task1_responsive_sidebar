
import '@/styles/globals.css';
import { Fragment } from 'react';
import TopHeader2 from '@/components/layouts/header/main-header2';

function MyApp({ Component, pageProps }) {
  return (

    <Fragment>
      <TopHeader2></TopHeader2>
      <Component {...pageProps} />
    </Fragment>



  );
}
export default MyApp;