import LogoImage from '/assets/shared/logo.svg';

const Logo = () => {
    return (
        <div className='bg-white rounded-full w-10 h-10 cursor-pointer'>
            <img
                src={LogoImage}
                alt='logo site'
                width={40}
                height={40}
            />
        </div>
    );
};

export default Logo;