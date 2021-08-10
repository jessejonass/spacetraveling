import { FC } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';

import { HomeProps } from '../components/Pages/Home/types';
import HomePage from '../components/Pages/Home';

const Home: FC<HomeProps> = ({ postsPagination }) => {
  return <HomePage postsPagination={postsPagination} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.subtitle', 'post.author'],
      pageSize: 2,
    }
  );

  const postsPagination = {
    next_page: response.next_page,
    results: response.results,
  };

  return {
    props: {
      postsPagination,
    },
  };
};
