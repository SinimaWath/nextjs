import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home({ query, fullHash }) {
    const imageUrl = `//avatars.mds.yandex.net/get-kinopoisk-image/${fullHash}/1200x630`
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                {!!query.check ?
                    (<>
                        <meta property="og:image" content={imageUrl} />
                        <meta property="og:image:width" content={1200}/>
                        <meta property="og:image:height" content={630}/>
                        <meta name="twitter:site" content="kinopoiskru" />
                        <meta name="twitter:image" content={imageUrl} />
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta property="og:title" content="Лу Дуайон (Lou Doillon)"/>
                        <meta property="twitter:title" content="Лу Дуайон (Lou Doillon)"/>
                        <meta property="og:description" content="Лу Дуайон (Lou Doillon). Фильмография, фото, интересные факты из жизни  и многое другое на КиноПоиске. Полный список фильмов и совместных работы с другими актерами и режиссерами."/>
                        <meta property="twitter:description" content="Лу Дуайон (Lou Doillon). Фильмография, фото, интересные факты из жизни  и многое другое на КиноПоиске. Полный список фильмов и совместных работы с другими актерами и режиссерами."/>
                        <meta name="twitter:site" content="kinopoiskru"/>
                    </>): null}
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}

export const getServerSideProps = (ctx) => {
    return {
        props: {
            query: ctx.query,
            fullHash: ctx.query.id+ '/' + ctx.query.hash,
        }
    }
}
