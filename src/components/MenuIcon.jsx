const MenuIcon = ({ icon }) => {
    return (
        <img 
            src={icon}
            alt="menu icon"
            className='block md:hidden pr-[100px]'
        />
    );
};

export default MenuIcon;