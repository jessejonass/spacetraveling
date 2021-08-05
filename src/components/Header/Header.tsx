import { FC } from 'react';

import styles from './header.module.scss';
import commomStyle from '../../styles/common.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={commomStyle.content}>
        <img src="/images/logo.svg" alt="SpaceTraveling" />
      </div>
    </header>
  );
};

export default Header;
