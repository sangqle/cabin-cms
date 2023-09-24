import Layout from '../components/layout';

type AppProps = {
    Component: React.FunctionComponent;
    pageProps: any;
};

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}