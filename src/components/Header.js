import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div>
                <p>Header</p>
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