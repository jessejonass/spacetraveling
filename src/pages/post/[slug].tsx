import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import PostPage from '../../components/Pages/Post';
import { PostProps } from '../../components/Pages/Post';

const Post: FC<PostProps> = ({ post }) => {
  return <PostPage post={post} />;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      pageSize: 2,
    }
  );

  const paths = posts.results.map(post => ({
    params: { slug: post.uid },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const post = await prismic.getByUID('post', String(slug), {});

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12, // 12 horas
  };
};
