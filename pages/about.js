import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
