import "@/src/styles/globals.scss";
import Locales from "@/src/components/locales";
import Layout from "@/src/layout";

function MyApp({ Component, pageProps }) {
    return (
        <Locales>
            <Layout>
                <Component className="text-green-700" {...pageProps} />
            </Layout>
        </Locales>
    );
}

export default MyApp;
