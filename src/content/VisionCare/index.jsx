import MainLayout from "../../layout"

import banner_main from "../../images/FONDOS-BANNERS-VC.png"
import banner_logo from "../../images/LOGO_F2F_CON_FECHA.png"
import { Link } from "react-router-dom"
import "../../styles/content/Vision/BannerSection.css"

import "../../styles/content/Vision/FormSection.css"
import FormCompatitor from "../../components/Form"

import "../../styles/content/Vision/CalendarSection.css"
import agenda_test from "../../images/agenda-test.png"

const VisionCarePage = () => {

    return (
        <MainLayout>
            <section id="banner-section-vc" className="banner-section-vc">
                <img src={banner_main} alt="Banner Main Blue" className="banner-main image" />
                <img src={banner_logo} alt="Banner logo" className="banner-main logo" />
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
                <div className="line-divider"></div>
                <h2 className="form-section title">
                    EN F2F CHALLENGE, SABEMOS QUE LAS<br></br> MEJORES EXPERIENCIAS SE VIVEN EN EQUIPO.
                </h2>
                <p className="form-section subtitle">
                    ¡Invita a tu compañero/a a registrarse como dúo imparable!
                </p>
                <FormCompatitor />
            </section>

            <section id="calendar-vc" className="calendar-vc">
                <h2 className="calendar-title">
                    Agenda Optometría
                </h2>
                <h3 className="calendar-subtitle">
                    - Simposio Facocaribe -
                </h3>
                <div className="calendar-vc content">
                    <img src={agenda_test} alt="Test agenda" className="calendar-vc test-img-agenda" />
                </div>
            </section>
        </MainLayout>
    )
}

export default VisionCarePage