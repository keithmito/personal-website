import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-dark text-gray-100 font-sans selection:bg-primary selection:text-dark">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
            <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none z-0"></div>

            <Navbar />
            <main className="flex-grow pt-16 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
