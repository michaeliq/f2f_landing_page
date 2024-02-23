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
                        <label htmlFor="fullname1">
                            Nombre y Apellido:
                        </label>
                        <input value={compatitorData?.fullname2} onChange={setDataForm} type="text" id="fullname2" name="fullname2" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="movil1">
                            Movil:
                        </label>
                        <input value={compatitorData?.movil1} onChange={setDataForm} type="number" id="movil1" name="movil1" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="movil2">
                            Movil:
                        </label>
                        <input value={compatitorData?.movil2} onChange={setDataForm} type="number" id="movil2" name="movil2" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="email1">
                            Email:
                        </label>
                        <input value={compatitorData?.email1} onChange={setDataForm} type="text" id="email1" name="email1" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="fullname2">
                            Email:
                        </label>
                        <input value={compatitorData?.email2} onChange={setDataForm} type="text" id="email2" name="email2" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="city1">
                            Ciudad de origen:
                        </label>
                        <input value={compatitorData?.city1} onChange={setDataForm} type="text" id="city1" name="city1" />
                    </div>
                    <div className="form-compatitor content-input">
                        <label htmlFor="city2">
                            Ciudad de origen:
                        </label>
                        <input value={compatitorData?.city2} onChange={setDataForm} type="text" id="email2" name="email2" />
                    </div>
                </div>
                <ListCategory setCategory={setCategoryForm} categorySelected={compatitorData?.category} />
                <div className="form-compatitor content-input">
                    <input type="submit" disabled={check ? false:true}  id="send-button" className={`form-compatitor send-button ${check === true ? "enable":"disable"}`} value="Enviar"/>
                </div>
            </form>
            <p className="form-section disclaimer">
                Al llenar este formulario de regristro, autorizo a LABORATORIOS ALCON DE COLOMBIA S.A. a almacenar en un servidor extranjero, tratar y transferir a terceros los datos personales que he diligenciado. LABORATORIOS ALCON DE COLOMBIA S.A. le informa que sus datos personales se almacenan en nuestra base de datos, con el fin de tener registro de los asistentes a nuestros eventos. De igual forma, autorizo a LABORATORIOS ALCON DE COLOMBIA S.A. para que durante el evento en el que he participado, grabe, utilice, muestre, comparta, reproduzca, publique, y distribuya la eventual grabación que se haga en el evento.
            </p>
            <div className="form-section container-checkbox">
                <input value={check} onChange={()=>setStatusCheck(prev => !prev)} className="form-section valid_disclaimer" type="checkbox" name="" id="" />
                <p className="form-section text_checkbox">Acepto</p>
            </div>
        </>
    )
}

export default FormCompatitor