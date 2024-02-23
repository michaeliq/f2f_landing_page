import "../../styles/components/ListCategory.css"
import arrow_down from "../../images/category-arrow-down.png"
import { useLocation } from "react-router-dom"
import categoryItems from "../../data/category"
import { useEffect, useState } from "react"

const ListCategory = () => {

    const [tableItems, setItems] = useState(null)
    const [tableVisible, setTableVisible] = useState(false)

    const { pathname } = useLocation()

    const generateItemList = (category) => {
        if (pathname === "/vision-care") {
            const itemList = category.filter(item => {
                if (item.page === "vision care") {
                    return item
                }
            }).map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.fecha}</th>
                        <th>{item.hora}</th>
                        <th>{item.name}</th>
                    </tr>
                )
            })
            return itemList
        } else if (pathname === "/surgical") {
            const itemList = category.filter(item => {
                if (item.page === "surgical") {
                    return item
                }
            }).map((item, key) => {
                return (
                    <tr>
                        <th>{item.fecha}</th>
                        <th>{item.hora}</th>
                        <th>{item.name}</th>
                    </tr>
                )
            })
            return itemList
        }
    }

    const changeVisible = (e) => {
        e.preventDefault()
        setTableVisible(prev => !prev)
    }

    useEffect(() => {
        setItems(generateItemList(categoryItems))
    }, [categoryItems])

    return (
        <div className="list-category-container">
            <div className="list-category button-display">
                <span className="list-category text-button">
                    Categoria
                </span>
                <img onClick={changeVisible} src={arrow_down} alt="Despliegue de categorias" className={`list-category img-button ${tableVisible ? "visible" : ""}`} />
            </div>
            <table className={`list-category table ${tableVisible ? "visible" : ""}`}>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    )
}

export default ListCategory