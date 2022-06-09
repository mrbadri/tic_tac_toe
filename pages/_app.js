import '@/src/styles/globals.scss';
import Layout from '../src/layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component className="text-green-700" {...pageProps} />
        </Layout>
    );
}

export default MyApp;
