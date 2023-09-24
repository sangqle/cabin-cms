import SideBar from './sidebar';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }: any) {
    return (
        <div className='h-full'>
            <Header />
            <div className='flex h-full'>
                <SideBar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
}