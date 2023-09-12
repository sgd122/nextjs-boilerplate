'use client';
import styles from './home.module.scss';

import { Container } from '@/app/home/styles';

const ViewHome = () => {
  return (
    <Container className={styles.container}>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Container>
  );
};

export default ViewHome;
