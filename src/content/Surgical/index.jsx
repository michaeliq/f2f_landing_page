import MainLayout from "../../layout"

import banner_main from "../../images/FONDOS-BANNERS-SURGICAL.png"
import banner_logo from "../../images/LOGO_F2F_CON_FECHA.png"
import { Link } from "react-router-dom"
import "../../styles/content/Surgical/BannerSection.css"

import "../../styles/content/Surgical/FormSection.css"
import FormCompatitor from "../../components/Form"

import "../../styles/content/Surgical/CalendarSection.css"
import agenda_test from "../../images/agenda-test.png"
import Carousel from "../../components/Carousel"

import "../../styles/content/Surgical/VideoSection.css"
import cloud_left from "../../images/cloud_left.png"
import cloud_right from "../../images/cloud_right.png"

import Footer from "../../components/Footer"

const SurgicalPage = () => {

    return (
        <MainLayout>
            <section id="banner-section-sur" className="banner-section-sur">
                <img src={banner_main} alt="Banner Main Blue" className="banner-main image" />
                <img src={banner_logo} alt="Banner logo" className="banner-main logo" />
                <h1 className="banner-main title">¡Surgical!</h1>
                <div className="banner-main info">
                    <p className="banner-main-info1">
                        ¡No te pierdas la oportunidad DE FORMAR PARTE DE ESTA EXPERIENCIA!
                    </p>
                    <Link className="banner-main-link" to="/vision-care">
                        ¡Vision Care!
                    </Link>
                </div>
            </section>

            <section id="form-section-sur" className="form-section-sur">
                <div className="line-divider"></div>
                <h2 className="form-section title">
                    EN F2F CHALLENGE, SABEMOS QUE LAS<br></br> MEJORES EXPERIENCIAS SE VIVEN EN EQUIPO.
                </h2>
                <p className="form-section subtitle">
                    ¡Invita a tu compañero/a a registrarse como dúo imparable!
                </p>
                <FormCompatitor />
            </section>

            <section id="calendar-sur" className="calendar-sur">
                <h2 className="calendar-title">
                    Agenda Optometría
                </h2>
                <h3 className="calendar-subtitle">
                    - Simposio Facocaribe -
                </h3>
                <Carousel />
                <div className="calendar-sur content">
                    <img src={agenda_test} alt="Test agenda" className="calendar-vc test-img-agenda" />
                </div>
            </section>

            <section className="video-sur">
                <h2 className="video-sur title">
                    COMITÉ CIENTÍFICO
                </h2>
                <div className="video-sur container">
                    <div className="video-sur content-left">
                        <img src={cloud_left} alt="Cloud left" className="video-sur cloud-img-left" />
                        <video width="320" height="240" controls>
                            <source src="https://youtu.be/ViotnARQIw4" type="video/mp4" />
                            <source src="" type="video/ogg" />
                            El navegador no soporta la etiqueta de video
                        </video>
                    </div>
                    <div className="video-sur content-right">
                        <video width="320" height="240" controls>
                            <source src="" type="video/mp4" />
                            <source src="" type="video/ogg" />
                            El navegador no soporta la etiqueta de video
                        </video>
                        <img src={cloud_right} alt="Cloud right" className="video-sur cloud-img-right" />
                    </div>
                </div>
            </section>
            <Footer />
        </MainLayout>
    )
}

export default SurgicalPage