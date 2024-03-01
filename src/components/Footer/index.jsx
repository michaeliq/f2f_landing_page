import image_footer from "../../images/footer.png"
import image_footer_movil from "../../images/footer movil.png"
import facocaribe from "../../images/facocaribe.png"
import alcon from "../../images/alcon.png"
import "../../styles/components/Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <img src={image_footer_movil} alt="Footer" className="footer-img-movil" />
            <img src={image_footer} alt="Footer" className="footer-img" />
            <img src={facocaribe} alt="Footer" className="footer-img-facocaribe" />
            <img src={alcon} alt="Footer" className="footer-img-alcon" />

        </div>
    )
}

export default Footer