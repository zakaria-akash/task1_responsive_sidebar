import React, { Fragment, useEffect, useState } from 'react';

import classes from "./main-header2.module.scss";

import { useRouter } from 'next/router';
import { Img } from 'react-image';
import Link from 'next/link';
import HeaderButton2 from '../headers-button/header-button2';
import HeaderButtonMobile from '../headers-button/header-button-mobile';
import { CloseCircleFilled } from '@ant-design/icons';
import { navBarMobileIconsData } from '@/store/nav-bar-mobile-icons-data';


const TopHeader2 = () => {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    // setTimeout(() => {
    //   // Toggle the isSidebarCollapsed state after 1 second
    //   setIsSidebarCollapsed(!isSidebarCollapsed);
    // }, 1000);
  };

  useEffect(() => {
    // Ensure consistency of state between server and client
    setIsSidebarCollapsed(true);
  }, []);



  return (
    <Fragment>
      {!isSidebarCollapsed && <div onClick={handleNavbarToggle} className={classes.sideBarBackDrop}></div>}
      {!isSidebarCollapsed &&
        <div className={`${classes.mobileSideBar} ${isSidebarCollapsed && "disappear"}`}>
          <div className={classes.mobileBarLogoRow}>
            <Img
              src="/images/bondstein_logo.jpg"
              className={`img-fluid ${classes.logoPC}`}
              alt="cotton_group_logo"
            />
            <CloseCircleFilled
              style={{ color: "#f8fbfa", fontSize: "3rem" }}
              onClick={handleNavbarToggle}
            />
          </div>
          <ul className={classes.mobileBarMenuRow}>
            <HeaderButtonMobile title="Home" handleNavbarToggle={handleNavbarToggle} />
            <HeaderButtonMobile title="About" handleNavbarToggle={handleNavbarToggle} />
            <HeaderButtonMobile title="Work" handleNavbarToggle={handleNavbarToggle} />
            <HeaderButtonMobile title="Sustainability" handleNavbarToggle={handleNavbarToggle} />
            <HeaderButtonMobile title="Inquire" handleNavbarToggle={handleNavbarToggle} />
            <HeaderButtonMobile title="Contact" handleNavbarToggle={handleNavbarToggle} />

          </ul>
          <div className={classes.mobileBarIconRow}>
            {navBarMobileIconsData && navBarMobileIconsData.map((icon) =>
              <Link key={icon.id} href={icon.href} target='_blank'>
                <Img src={icon.imageSrc} className="img-fluid" alt={icon.alt} />
              </Link>
            )}

          </div>
        </div>
      }
      <div id="topheader" className={`${classes.mainHeader}`}>
        <nav className={`navbar navbar-expand-lg`}>
          <div className={`container-fluid ${classes.navFirstChild}`}>

            <Img
              src="/images/bondstein_logo.jpg"
              className={`img-fluid ${classes.logoPC}`}
              alt="cotton_group_logo"
            />

            <i className="fa-solid fa-bars fa-2xl navbar-toggler btn"
              style={{ color: "#f8fbfa", fontSize: "2.5rem" }}
              onClick={handleNavbarToggle}
            ></i>



            <div className={`collapse navbar-collapse ${classes.navBarCollapseDiv}`} id="bs-example-navbar-collapse-1">
              <ul className={`navbar-nav ${classes.navbarNav}`}>
                <HeaderButton2 title="Home" />
                <HeaderButton2 title="About" />
                <HeaderButton2 title="Work" />
                <HeaderButton2 title="Sustainability" />
                <HeaderButton2 title="Inquire" />
                <HeaderButton2 title="Contact" />
              </ul>

              <div className={`${classes.mobileIconsDiv}`}>
                {navBarMobileIconsData && navBarMobileIconsData.map((icon) =>
                  <Link key={icon.id} href={icon.href} target='_blank'>
                    <Img src={icon.imageSrc} className="img-fluid" alt={icon.alt} />
                  </Link>
                )}

              </div>

            </div>
          </div>
        </nav >
      </div >
    </Fragment>
  );
};

export default TopHeader2;