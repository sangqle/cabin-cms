import SideBar from './sidebar';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }: any) {
    return (
        <div className='overflow-hidden' style={{
        }}>
            <Header />
            <div className='flex '>
                <SideBar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
}