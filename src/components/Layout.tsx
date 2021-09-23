import { FC } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout : FC = ({children}) => (
    <div className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            {children}
            <Footer />
        </div>
    </div>
);

export default Layout;