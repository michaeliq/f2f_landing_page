import "../../styles/components/Header.css";
import Nav from '../Nav';
import banner_header from '../../images/banner solo.png'

const Header = () => {

    return (
        <header className="header">
            <img src={banner_header} className="banner-header" alt="Banner header"/>
            <Nav/>
        </header>
    )
}

export default Header