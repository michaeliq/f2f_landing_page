import ReactCurvedText from "react-curved-text"
import arrow_left_vc from "../../images/arrow-left-vc.png"
import arrow_right_vc from "../../images/arrow-right-vc.png"
//import arrow_left_sur from "../../images/arrow-left-sur.png"
//import arrow_right_sur from "../../images/arrow-right-sur.png"
import image_vs from "../../images/GUANTES MORADO.png"
import "../../styles/components/Carousel.css"

const Carousel = () => {

    return (
        <div className="carousel-container">
            <div className="carousel-container-images">
                <img src={arrow_left_vc} alt="Test agenda" className="carousel-images arrow-left" />
                <img src={image_vs} alt="Test agenda" className="carousel-images vs-img" />
                <div className="circle">
                    <ReactCurvedText
                        width={350}
                        height={350}
                        cx={150}
                        cy={150}
                        rx={142}
                        ry={70}
                        startOffset={60}
                        reversed={false}
                        text={`Marzo 8`}
                        textProps={{
                            style: {
                                fontSize: 63,
                                fontFamily: "Fontps",
                            }
                        }}
                        textPathProps={{
                            style:{
                                fill:"#00aeef"
                            }
                        }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                        className="center"
                    />
                </div>
                <div className="circle2">
                    <ReactCurvedText
                        width={350}
                        height={350}
                        cx={150}
                        cy={150}
                        rx={145}
                        ry={70}
                        startOffset={60}
                        reversed={false}
                        text={`Marzo 8`}
                        textProps={{
                            style: {
                                fontSize: 60,
                                fontFamily: "Fontps",
                            }
                        }}
                        textPathProps={{
                            style:{
                                fill:"#fff"
                            }
                        }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                        className="center"
                    />
                </div>
                <img src={arrow_right_vc} alt="Test agenda" className="carousel-images arrow-right" />
            </div>
        </div>
    )
}

export default Carousel