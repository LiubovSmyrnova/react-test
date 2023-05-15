import {Link} from "react-router-dom";
//https://reactrouter.com/en/main/components/link helped to understand Router v6
const Header = () => {
    return(
        //header is showing in all pages by importing on each of them from here
        <header className="header">
            <div>
                <p>Liubov</p>
            </div>
            <nav className="app-header">
                <ul className="links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;