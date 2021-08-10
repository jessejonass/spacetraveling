import { FC } from 'react';
import Link from 'next/link';
import { FaCalendar, FaUser } from 'react-icons/fa';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './card.module.scss';

import { CardProps } from './types';

const Card: FC<CardProps> = ({ title, date, author, subtitle, slug }) => {
  return (
    <div className={styles.cardContainer}>
      <Link href={`/post/${slug}`}>
        <a>{title}</a>
      </Link>

      <p>{subtitle}</p>

      <div className={styles.infoContainer}>
        <div>
          <FaCalendar size={20} color="#bbb" />
          <time>
            {format(new Date(date), 'dd MMM yyyy', {
              locale: ptBR,
            })}
          </time>
        </div>

        <div>
          <FaUser size={20} color="#bbb" />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
