import { useState } from "react"
import "../../styles/components/FormCompatitor.css"
import ListCategory from "./ListCategory"
import Swal from "sweetalert2"

const FormCompatitor = () => {

    const [check, setStatusCheck] = useState(false)
    const [compatitorData, setCompatitorData] = useState({})

    const setDataForm = (e) => {
        setCompatitorData(prev => {
            let dato = {}
            dato[e.target.name] = e.target.value
            return { ...prev, ...dato }
        })
    }

    const setCategoryForm = (data) => {
        setCompatitorData(prev => {
            const datos = {
                hour: data.hour,
                date: data.date,
                name: data.name
            }
            return { ...prev, ...datos }
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const competitorRequest = await fetch("https://entorno.advancesas.co:4500/api/user", {
                method: "POST",
                body: JSON.stringify({
                    fullname: compatitorData.fullname1,
                    partner: compatitorData.fullname2,
                    email: compatitorData.email1,
                    movil: compatitorData.movil1,
                    category: compatitorData.name,
                    city: compatitorData.city1,
                    gener1: compatitorData.gener1,
                    gener2: compatitorData.gener2
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            await fetch("https://entorno.advancesas.co:4500/api/category", {
                method: "PUT",
                body: JSON.stringify({
                    name: compatitorData.name,
                    hour: compatitorData.hour,
                    date: compatitorData.date,
                    team: compatitorData.fullname1 + "," + compatitorData.fullname2
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })


            Swal.fire({
                title: "Muchas gracias!",
                text: "Te has registrado exitosamente",
                icon: "success"
            })

            setCompatitorData({
                fullname1: "",
                fullname2: "",
                city1: "",
                movil1: "",
                email1: "",
                category: "",
                gener: ""
            })

            setStatusCheck(false)

        } catch (error) {
            console.error(error)
            Swal.fire({
                title: "Lo sentimos",
                text: "Hubo un error durante el proceso de registro, vuelve a intentar",
                icon: "error"
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-compatitor-container">
                <div className="form-compatitor">
                    <div className="form-compatitor content-input">
                        <label htmlFor="fullname1">
                            Nombre y Apellido:
                        </label>
                        <input value={compatitorData?.fullname1} onChange={setDataForm} type="text" id="fullname1" name="fullname1" />
                        <div className="form-gener-box">
                            <label htmlFor="fullname1">
                                Género
                            </label>
                            <div>
                                <input type="radio" id="hombre" onChange={setDataForm} name="gener1" value="hombre" />
                                <label for="huey">M</label>
                            </div>

                            <div>
                                <input type="radio" id="mujer" onChange={setDataForm} name="gener1" value="mujer" />
                                <label for="dewey">F</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-compatitor content-input">
                        <label htmlFor="movil1">
                            Movil:
                        </label>
                        <input value={compatitorData?.movil1} onChange={setDataForm} type="number" id="movil1" name="movil1" />
                    </div>

                    <div className="form-compatitor content-input">
                        <label htmlFor="email1">
                            Email:
                        </label>
                        <input value={compatitorData?.email1} onChange={setDataForm} type="text" id="email1" name="email1" />
                    </div>

                    <div className="form-compatitor content-input">
                        <label htmlFor="city1">
                            Ciudad de origen:
                        </label>
                        <input value={compatitorData?.city1} onChange={setDataForm} type="text" id="city1" name="city1" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="fullname1">
                            Compañero/a combate:
                        </label>
                        <input value={compatitorData?.fullname2} onChange={setDataForm} type="text" id="fullname2" name="fullname2" />
                        <div className="form-gener-box">
                            <label htmlFor="fullname1">
                                Género
                            </label>
                            <div>
                                <input type="radio" id="hombre" onChange={setDataForm} name="gener2" value="hombre" />
                                <label for="huey">M</label>
                            </div>

                            <div>
                                <input type="radio" id="mujer" onChange={setDataForm} name="gener2" value="mujer" />
                                <label for="dewey">F</label>
                            </div>
                        </div>
                    </div>
                </div>
                <ListCategory setCategory={setCategoryForm} categorySelected={compatitorData?.name} />
                <div className="form-compatitor content-input">
                    <input type="submit" disabled={check ? false : true} id="send-button" className={`form-compatitor send-button ${check === true ? "enable" : "disable"}`} value="Enviar" />
                </div>
            </form >
            <p className="form-section disclaimer">
                De conformidad con lo dispuesto en las normas vigentes sobre protección de datos personales, AUTORIZO libre, expresa e inequívocamente a Laboratorios Alcon de Colombia S.A., en adelante “Alcon” para que realice la recolección de los datos personales que suministre en el presente formulario de los que declaro soy el titular. La presente autorización le permitirá a Alcon, almacenar, usar, circular, suprimir, procesar, compilar, intercambiar y disponer de la información suministrada; así mismo mediante el presente formulario autorizo, la utilización de los derechos de imagen sobre fotografías o procedimientos análogos y/o digitales a la fotografía, o producciones audiovisuales (videos) para ser utilizada en ediciones impresas y electrónicas, digitales, ópticas y en redes (Internet e Intranet), mensajes de datos o similares, y en general para cualquier medio. Alcon podrá realizar su publicación de manera directa, o a través de un tercero que se designe para tal fin. Manifiesto que como titular de la información aquí autorizada, conozco que la recolección y tratamiento de los datos se realizará de conformidad con la Política de Tratamiento de Datos Personales publicada en: www.alcon.com/co, así como que fui informado de los derechos con que cuenta el titular de la información, especialmente a: conocer, actualizar y rectificar la información personal, revocar la autorización y solicitar la supresión del dato, los cuales se podrán ejercer a través del correo electrónico: privacidad-1.datos@Alcon.com.  El tratamiento de sus datos pesonales será usado exclusivamente para efectos de registro en esta actividad en marco del Congreso.
            </p>
            <div className="form-section container-checkbox">
                <input checked={check} onChange={() => setStatusCheck(prev => !prev)} className="form-section valid_disclaimer" type="checkbox" name="" id="" />
                <p className="form-section text_checkbox">Acepto</p>
            </div>
        </>
    )
}

export default FormCompatitor