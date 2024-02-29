import ReactCurvedText from "react-curved-text"
import arrow_left_vc from "../../images/arrow-left-vc.png"
import arrow_right_vc from "../../images/arrow-right-vc.png"
import image_vs from "../../images/GUANTES MORADO.png"
import "../../styles/components/Carousel.css"
import img_1_sur from "../../images/carrusel_sur/img_1_sur.png"
import img_2_sur from "../../images/carrusel_sur/img_2_sur.png"
import img_3_sur from "../../images/carrusel_sur/img_3_sur.png"
import img_4_sur from "../../images/carrusel_sur/img_4_sur.png"
import img_5_sur from "../../images/carrusel_sur/img_5_sur.png"
import img_6_sur from "../../images/carrusel_sur/img_6_sur.png"
import img_1_vc from "../../images/carrusel_vc/img_1_vc.png"
import img_2_vc from "../../images/carrusel_vc/img_2_vc.png"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router"

const Carousel = () => {

    const [images, setImages] = useState([])
    const [position, setPostion] = useState(1)
    const [options, setOptions] = useState([])
    const { pathname } = useLocation()

    const increment = () => {
        if (position < options.length) setPostion(prev => prev + 1)
        console.log("increment")
    }

    const decrement = () => {
        if (position > 1) setPostion(prev => prev - 1)
        console.log("decrement")
    }

    useEffect(() => {
        if (pathname === "/surgical") {
            const option = [
                { src: img_1_sur },
                { src: img_2_sur },
                { src: img_3_sur },
                { src: img_4_sur },
                { src: img_5_sur },
                { src: img_6_sur }
            ]
            setOptions(option)
            setImages([option[position - 1]])
        } else if (pathname === "/vision-care") {
            const option = [
                {src:img_1_vc},
                {src:img_2_vc}
            ]
            setOptions(option)
            setImages([option[position - 1]])
        }
    }, [position, pathname])

    return (
        <div className="carousel-container">
            <div className="carousel-container-images">

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
                            style: {
                                fill: "#00aeef"
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
                            style: {
                                fill: "#fff"
                            }
                        }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                        className="center"
                    />
                </div>
                <div className="carousel-content-image-box">
                    <div className="image-slice">
                        {images.map((image, key) => (
                            <img key={key} src={image.src} alt={"imagen #" + key} className="carousel-images-slice" />
                        ))}
                    </div>
                    <div className="carousel-container-buttons">
                        <img onClick={decrement} src={arrow_left_vc} alt="flecha izquierda cambio en agenda" className="carousel-images arrow-left" />
                        <img onClick={increment} src={arrow_right_vc} alt="flecha derecha cambio en agenda" className="carousel-images arrow-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel