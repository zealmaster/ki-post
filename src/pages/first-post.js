import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


const FirstPost = () => {
    return (
        <Layout>
        <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <div className={styles.main}>
          <h1>First Post</h1>;
          <Image
            src="/images/profile.jpg" // Route of the image file
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt="Your Name"
            />
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
          </div>
        </Layout>
      );
}
export default FirstPost;