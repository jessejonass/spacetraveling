import { FC } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

import { HomeProps } from '../components/Pages/Home/types';
import HomePage from '../components/Pages/Home';

const Home: FC<HomeProps> = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.subtitle', 'post.author'], // TODO
      pageSize: 2,
    }
  );

  return {
    props: {
      posts,
    },
  };
};
