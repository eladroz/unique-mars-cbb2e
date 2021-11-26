import '../components/register-components';
import '../css/main.css';
// TBD document this
import 'stackbit-typist/dist/Typist.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
