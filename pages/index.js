import { Alegreya_Sans } from 'next/font/google'
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


const alegreya = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  return (
   <Layout>
    <div className={utilStyles.headingMd}>
      <h1 className={styles.title}>
        Thiago Diniz
      </h1>
      <p className={styles.description}>
        Founder & CTO at <a href="https://www.hent.com.br">hent</a>
      </p>
      <div className={styles.grid}>
        algum blurb rápido sobre mim
      </div>
      </div>
    </Layout>
  )
}
