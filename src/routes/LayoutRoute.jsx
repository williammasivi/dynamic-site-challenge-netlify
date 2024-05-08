import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

const LayoutRoute = () => {
    return (
        <>
        <h1>something</h1>
            <Header />
            <Outlet />
        </>
    );
};

export default LayoutRoute;