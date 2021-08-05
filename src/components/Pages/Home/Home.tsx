import { FC } from 'react';

import { HomeProps } from './types';

import commonStyles from '../../../styles/common.module.scss';
import styles from './home.module.scss';

import Card from './components/Card';

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={commonStyles.content}>
        {posts.results.map(post => (
          <Card
            key={post.uid}
            title={post.data.title}
            subtitle={post.data.subtitle}
            date={post.first_publication_date}
            author={post.data.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
