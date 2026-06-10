import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow">
                <div className="min-h-screen flex flex-col">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;