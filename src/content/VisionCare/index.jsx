import MainLayout from "../../layout"

import banner_main from "../../images/FONDOS-BANNERS-VC.png"
import banner_logo from "../../images/LOGO_F2F_CON_FECHA.png"
import { Link } from "react-router-dom"
import "../../styles/content/Vision/BannerSection.css"

import "../../styles/content/Vision/FormSection.css"
import FormCompatitor from "../../components/Form"

import "../../styles/content/Vision/CalendarSection.css"
import Carousel from "../../components/Carousel"

import "../../styles/content/Vision/VideoSection.css"
import cloud_left from "../../images/cloud_left.png"
import cloud_right from "../../images/cloud_right.png"
import video_1 from "../../videos/F2F_VC_1.mp4"
import video_2 from "../../videos/F2F_2.0.mp4"

import Footer from "../../components/Footer"

const VisionCarePage = () => {

    return (
        <MainLayout>
            <section id="banner-section-vc" className="banner-section-vc">
                <img src={banner_main} alt="Banner Main Blue" className="banner-main image" />
                <img src={banner_logo} alt="Banner logo" className="banner-main logo" />
                <h1 className="banner-main title">¡Vision Care!</h1>
                <div className="banner-main info">
                    <Link className="banner-main-link" to="/vision-care#video">
                        Comité Informativo
                    </Link>
                    <p className="banner-main-info1">
                        ¡NO SE PIERDA LA OPORTUNIDAD DE <span>PONER A PRUEBA SUS CONOCIMIENTOS!</span><br/>
                        <span>¡COMBATIENDO EN EL RING!</span>
                    </p>
                </div>
            </section>

            <section id="form-section-vc" className="form-section-vc">
                <div className="line-divider"></div>
                <h2 className="form-section title">
                    ¡Compita con los mejores!<br></br> Regístrese.
                </h2>
                <p className="form-section subtitle">
                    ¡Invite a su compañero/a para ser un dúo imparable!
                </p>
                <FormCompatitor />
            </section>

            <section id="calendar-vc" className="calendar-vc">
                <h2 className="calendar-title">
                    - Simposio Optometría -
                </h2>
                <Carousel />
            </section>

            <section id="video" className="video-vc">
                <h2 className="video-vc title">
                    COMITÉ INFORMATIVO
                </h2>
                <div className="video-vc container">
                    <div className="video-vc content-left">
                        <img src={cloud_left} alt="Cloud left" className="video-vc cloud-img-left" />
                        <video src={video_1} width="320" height="240" controls>
                        </video>
                    </div>
                    <div className="video-vc content-right">
                        <video src={video_2} width="320" height="240" controls>
                        </video>
                        <img src={cloud_right} alt="Cloud right" className="video-vc cloud-img-right" />
                    </div>
                </div>
            </section>
            <Footer />
        </MainLayout>
    )
}

export default VisionCarePage