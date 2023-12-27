import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from "./header-button2.module.scss";

const HeaderButton2 = (props) => {
  const { title } = props;
  const router = useRouter();

  let activeClass = false;

  if (router.pathname === `/${title.toLowerCase()}`) {
    activeClass = true;
  }

  if (title === "Home" && router.pathname === "/") {
    activeClass = true;
  }


  return (
    <li className={`nav-item py-0 my-2 ${classes.navItemList} ${activeClass && `${classes.active}`}`}>
      <Link className={`nav-link ${classes.headLinkItem}`} href={title !== "Home" ? `/${title.toLowerCase()}` : '/'}
      >
        <Image
          className="greenDotSign"
          src="/images/dot.svg"
          width={6}
          height={6}
          alt="Picture of dot sign"
        />
        <span className="px-2">{title}</span>
      </Link>
    </li>
  );
};

export default HeaderButton2;