import '../styles/globals.css';
import { Alegreya_Sans } from 'next/font/google'

const alegreya = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['700']
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}