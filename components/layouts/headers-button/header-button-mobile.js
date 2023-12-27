import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from "./header-button-mobile.module.scss";

const HeaderButtonMobile = (props) => {
  const { title, handleNavbarToggle } = props;
  const router = useRouter();

  let activeClass = false;

  if (router.pathname === `/${title.toLowerCase()}`) {
    activeClass = true;
  }

  if (title === "Home" && router.pathname === "/") {
    activeClass = true;
  }

  return (
    <li className={`py-0 my-2 ${classes.navItemList} ${activeClass && `${classes.active}`}`}>
      <Link className={`${classes.headLinkItem}`} href={title !== "Home" ? `/${title.toLowerCase()}` : '/'}
        onClick={handleNavbarToggle}
      >
        {title}
      </Link>
    </li>
  );
};

export default HeaderButtonMobile;