import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles['not-found-container']}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.message}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className={styles['home-link']}>
        Go to Home
      </Link>
    </div>
  );
}

