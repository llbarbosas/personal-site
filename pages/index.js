import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>llbarbosas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo.svg" alt="llbarbosas' logo" height="100" width="100" />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
