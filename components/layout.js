import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
  <div className={styles.container}>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <header className={styles.header}>
    <Link href="/">TDZ</Link>
    <Link href="/about">About</Link>
    <Link href="/articles">Articles</Link>
    </header>
    <main>{children}</main>
    
    <footer>
        <a  href="/contact">email</a>
        <a target="_blank" href="https://x.com/dinizz">x (formelly twitter)</a>
        <a target="_blank" href="https://github.com/thiagodiniz">github</a>
        <a target="_blank" href="https://www.linkedin.com/in/thiagodiniz/">linkedin</a>
        <a target="_blank" href="https://www.threads.net/@tdinizz/">threads</a>
      </footer>
  </div>)
  ;
}