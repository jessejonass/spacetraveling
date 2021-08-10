import { FC, useState } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { HomeProps, PostPagination } from './types';
import commonStyles from '../../../styles/common.module.scss';
import styles from './home.module.scss';

import Card from './components/Card';

const Home: FC<HomeProps> = ({ postsPagination }) => {
  const [posts, setPosts] = useState<PostPagination>({
    ...postsPagination,
    results: postsPagination.results.map(post => ({
      ...post,
    })),
  });

  async function loadMorePosts(): Promise<void> {
    const response = await fetch(`${posts.next_page}`).then(data =>
      data.json()
    );

    const morePosts = response.results.map(post => ({
      ...post,
    }));

    const loadedPosts = {
      ...posts,
      next_page: response.next_page,
      results: [...posts.results, ...morePosts],
    };

    setPosts(loadedPosts);
  }

  return (
    <>
      <Head>
        <title>home | spacetraveling</title>
      </Head>

      <div className={styles.homeContainer}>
        <div className={commonStyles.content}>
          {posts.results.map(post => (
            <Card
              key={post.uid}
              slug={post.uid}
              title={post.data.title}
              subtitle={post.data.subtitle}
              date={post.first_publication_date}
              author={post.data.author}
            />
          ))}

          {posts.next_page && (
            <button
              className={styles.loadMoreButton}
              type="button"
              onClick={loadMorePosts}
            >
              Carregar mais posts
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
