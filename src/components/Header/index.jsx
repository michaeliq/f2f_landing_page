import logo from '../../logo.svg';
import "../../styles/components/Header.css";
import Nav from '../Nav';

const Header = () => {

    return (
        <header className="header">
            <h1>Alcon</h1>
            <Nav/>
        </header>
    )
}

export default Header