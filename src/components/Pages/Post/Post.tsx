import { FC } from 'react';
import Head from 'next/head';
import { FaCalendar, FaUser, FaClock } from 'react-icons/fa';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { RichText } from 'prismic-dom';
import { useRouter } from 'next/router';
import { PostProps } from './types';
import styles from './post.module.scss';
import commonStyles from '../../../styles/common.module.scss';

const Post: FC<PostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>

      <div className={styles.postContainer}>
        <div className={styles.banner}>
          <img src={post.data.banner.url} alt={post.data.title} />
        </div>

        <div className={commonStyles.content}>
          <div className={styles.postContent}>
            <h1>{post.data.title}</h1>

            <div className={styles.infoContainer}>
              <div>
                <FaCalendar size={20} color="#bbb" />
                <time>
                  {format(
                    new Date(post.first_publication_date),
                    'dd MMM yyyy',
                    {
                      locale: ptBR,
                    }
                  )}
                </time>
              </div>

              <div>
                <FaUser size={20} color="#bbb" />
                <span>{post.data.author}</span>
              </div>

              <div>
                <FaClock size={20} color="#bbb" />
                <span>4 min</span>
              </div>
            </div>

            <div className={styles.postBody}>
              {post.data.content.map(content => (
                <div key={content.heading}>
                  <h3>{content.heading}</h3>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: RichText.asHtml(content.body),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
