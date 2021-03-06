import Head from 'next/head'
import LeftNav from '../components/LeftNav'
import TopNav from '../components/TopNav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chakra UI Community</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <div>
        <LeftNav />
      </div>
    </div>
  )
}
