import { Link } from 'react-router-dom';
import constants from '../constants/index';


const Logo = () => {
    const { LogoImage } = constants;
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