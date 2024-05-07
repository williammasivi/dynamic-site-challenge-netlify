//import Logo from '/assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            {/* <img src={Logo} alt="" /> */}
            <h1>Header</h1>
            <nav>

            </nav>
            {/* <nav>
                <NavLink>
                    00 Home
                </NavLink>
                <NavLink>
                    01 Destination
                </NavLink>
                <NavLink>
                    02 Crew
                </NavLink>
                <NavLink>
                    03 Technology
                </NavLink>
            </nav> */}
        </header>
    );
};

export default Header;