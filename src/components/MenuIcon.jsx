const MenuIcon = ({ icon }) => {
    return (
        <img 
            src={icon}
            alt="menu icon"
            className='block md:hidden pr-[200px]'
        />
    );
};

export default MenuIcon;