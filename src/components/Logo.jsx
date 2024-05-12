import { Link } from 'react-router-dom';
import LogoImage from '/assets/shared/logo.svg';


const Logo = () => {
    return (
        <Link
            className='bg-white rounded-full w-10 h-10 cursor-pointer'
            to="/"
        >
            <img
                src={LogoImage}
                alt='logo site'
                width={40}
                height={40}
            />
        </Link>
    );
};

export default Logo;