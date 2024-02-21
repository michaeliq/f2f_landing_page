import MainLayout from "../../layout"

import banner_main from "../../images/FONDOS-BANNERS-VC.png"
import banner_logo from "../../images/LOGO_F2F_CON_FECHA.png"
import { Link } from "react-router-dom"
import "../../styles/content/Vision/BannerSection.css"

import "../../styles/content/Vision/FormSection.css"

const VisionCarePage = () => {

    return (
        <MainLayout>
            <section id="banner-section-vc" className="banner-section-vc">
                <img src={banner_main} alt="Banner Main Blue" className="banner-main image" />
                <img src={banner_logo} alt="Banner logo" className="banner-main logo"/>
                <h1 className="banner-main title">¡Vision Care!</h1>
                <div className="banner-main info">
                    <p className="banner-main-info1">
                        ¡No te pierdas la oportunidad DE FORMAR PARTE DE ESTA EXPERIENCIA!
                    </p>
                    <Link className="banner-main-link" to="/surgical">
                        ¡Surgical!
                    </Link>
                </div>
            </section>

            <section id="form-section-vc" className="form-section-vc">

            </section>
        </MainLayout>
    )
}

export default VisionCarePage