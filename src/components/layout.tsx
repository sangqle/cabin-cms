import SideBar from './sidebar';
import Footer from './footer';

export default function Layout({ children }: any) {
    return (
        <>
            <SideBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}