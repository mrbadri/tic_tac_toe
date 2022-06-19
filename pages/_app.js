import "@/src/styles/globals.scss";
import Locales from "@/src/components/locales";
import Layout from "@/src/layout";
import DirectionProvider from "@/src/components/direction";

function MyApp({ Component, pageProps }) {
    return (
        <DirectionProvider>
            <Locales>
                <Layout>
                    <Component className="text-green-700" {...pageProps} />
                </Layout>
            </Locales>
        </DirectionProvider>
    );
}

export default MyApp;
