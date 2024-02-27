import "../../styles/components/ListCategory.css"
import arrow_down from "../../images/category-arrow-down.png"
import { useLocation } from "react-router-dom"
import categoryItems from "../../data/category"
import { useEffect, useState } from "react"

const ListCategory = ({setCategory,categorySelected}) => {

    const [tableItems, setItems] = useState(null)
    const [tableVisible, setTableVisible] = useState(false)

    const { pathname } = useLocation()

    const generateItemList = (category) => {
        if (pathname === "/vision-care") {
            const itemList = category.filter(item => {
                let value = ""
                if (item.page === "vision care") {
                    value = item
                }
                return value
            }).map((item, key) => {
                return (
                    <tr key={key + item.name}>
                        <th>{item.fecha}</th>
                        <th>{item.horario}</th>
                        <th><span className="item-selectable" onClick={selectCategory}>{item.name}</span></th>
                    </tr>
                )
            })
            return itemList
        } else if (pathname === "/surgical") {
            const itemList = category.filter(item => {
                let value = ""
                if (item.page === "surgical") {
                    value = item
                }
                return value
            }).map((item, key) => {
                return (
                    <tr key={key + item.name}>
                        <th>{item.fecha}</th>
                        <th>{item.horario}</th>
                        <th><span className="item-selectable" onClick={selectCategory}>{item.name}</span></th>
                    </tr>
                )
            })
            return itemList
        }
    }

    const selectCategory = (e) => {
        setCategory(e)
        changeVisible()
    }

    const changeVisible = () => {
        setTableVisible(prev => !prev)
    }

    useEffect(() => {
        setItems(generateItemList(categoryItems))
    }, [categoryItems,setCategory])

    return (
        <div className="list-category-container">
            <div className="list-category button-display">
                <span className="list-category text-button">
                    Categoria
                </span>
                <div className="list-category-select-container">
                {categorySelected}
                <img onClick={changeVisible} src={arrow_down} alt="Despliegue de categorias" className={`list-category img-button ${tableVisible ? "visible" : ""}`} />
                </div>
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