import { FC } from 'react';

import Link from 'next/link';
import styles from './header.module.scss';
import commomStyle from '../../styles/common.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a className={commomStyle.content}>
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
};

export default Header;
