import { FC } from 'react';
import Link from 'next/link';
import { FaCalendar, FaUser } from 'react-icons/fa';

import styles from './card.module.scss';

import { CardProps } from './types';

const Card: FC<CardProps> = ({ title, date, author, subtitle }) => {
  return (
    <div className={styles.cardContainer}>
      <Link href="/">
        <a>{title}</a>
      </Link>

      <p>{subtitle}</p>

      <div className={styles.infoContainer}>
        <div>
          <FaCalendar size={20} color="#bbb" />
          <time>
            {new Date(date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
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
