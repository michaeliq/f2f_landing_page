import { useState } from "react"
import "../../styles/components/FormCompatitor.css"
import ListCategory from "./ListCategory"

const FormCompatitor = () => {

    const [check,setStatusCheck] = useState(false)
    const [compatitorData, setCompatitorData] = useState({})

    const setDataForm = (e) => {
        setCompatitorData(prev =>{
            let dato = {}
            dato[e.target.label] = e.target.value
            return {prev,dato}
        })
    }

    const setCategoryForm = (e) => {
        setCompatitorData(prev => {
            return {...prev,category:e.target.innerText}
        })
    }

    return (
        <>
            <form onSubmit={()=>console.log("aqui")} className="form-compatitor-container">
                <div className="form-compatitor">
                    <div className="form-compatitor content-input">
                        <label htmlFor="fullname1">
                            Nombre y Apellido:
                        </label>
                        <input value={compatitorData?.fullname1} onChange={setDataForm} type="text" id="fullname1" name="fullname1" />
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
                    </div>
                </div>
                <ListCategory setCategory={setCategoryForm} categorySelected={compatitorData?.category} />
                <div className="form-compatitor content-input">
                    <input type="submit" disabled={check ? false:true}  id="send-button" className={`form-compatitor send-button ${check === true ? "enable":"disable"}`} value="Enviar"/>
                </div>
            </form>
            <p className="form-section disclaimer">
            De conformidad con lo dispuesto en las normas vigentes sobre protección de datos personales, AUTORIZO libre, expresa e inequívocamente a Laboratorios Alcon de Colombia S.A., en adelante “Alcon” para que realice la recolección de los datos personales que suministre en el presente formulario de los que declaro soy el titular. La presente autorización le permitirá a Alcon, almacenar, usar, circular, suprimir, procesar, compilar, intercambiar y disponer de la información suministrada; así mismo mediante el presente formulario autorizo, la utilización de los derechos de imagen sobre fotografías o procedimientos análogos y/o digitales a la fotografía, o producciones audiovisuales (videos) para ser utilizada en ediciones impresas y electrónicas, digitales, ópticas y en redes (Internet e Intranet), mensajes de datos o similares, y en general para cualquier medio. Alcon podrá realizar su publicación de manera directa, o a través de un tercero que se designe para tal fin. Manifiesto que como titular de la información aquí autorizada, conozco que la recolección y tratamiento de los datos se realizará de conformidad con la Política de Tratamiento de Datos Personales publicada en: www.alcon.com/co, así como que fui informado de los derechos con que cuenta el titular de la información, especialmente a: conocer, actualizar y rectificar la información personal, revocar la autorización y solicitar la supresión del dato, los cuales se podrán ejercer a través del correo electrónico: privacidad-1.datos@Alcon.com 
            </p>
            <div className="form-section container-checkbox">
                <input value={check} onChange={()=>setStatusCheck(prev => !prev)} className="form-section valid_disclaimer" type="checkbox" name="" id="" />
                <p className="form-section text_checkbox">Acepto</p>
            </div>
        </>
    )
}

export default FormCompatitor