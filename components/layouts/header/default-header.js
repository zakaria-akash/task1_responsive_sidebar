import React, { Fragment } from 'react';
import TopHeader from './main-header';
import TopHeader2 from './main-header2';
import { useMediaQuery } from 'react-responsive';

const DefaultHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <Fragment>
      {isMobile && <TopHeader />}
      {!isMobile && <TopHeader2 />}
    </Fragment>
  );
};

export default DefaultHeader;