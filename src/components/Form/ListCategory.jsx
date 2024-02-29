import "../../styles/components/ListCategory.css"
import arrow_down from "../../images/category-arrow-down.png"
import { useLocation } from "react-router-dom"
import categoryItems from "../../data/category"
import { useEffect, useState } from "react"

const ListCategory = ({ setCategory, categorySelected }) => {

    const [tableItems, setItems] = useState(null)
    const [tableVisible, setTableVisible] = useState(false)
    const [categoryList,setCategoryList] = useState([])

    const { pathname } = useLocation()

    const getCategories = async () => {
        const categoryRequest = await fetch("http://localhost:4501/api/category", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await categoryRequest.json()
        setCategoryList(data)
    }

    const generateItemList = () => {
        if (pathname === "/vision-care") {
            const itemList = categoryList.filter(item => {
                let value = ""
                if (item.page === "vision care" && item.available !== false) {
                    value = item
                }
                return value
            }).map((item, key) => {
                return (
                    <tr key={key + item.name}>
                        <th>{item.date}</th>
                        <th>{item.hour}</th>
                        <th>{item.name}</th>
                        <th><span className="item-selectable" onClick={() => selectCategory(item)}>Seleccionar</span></th>
                    </tr>
                )
            })
            return itemList
        } else if (pathname === "/surgical") {
            const itemList = categoryList.filter(item => {
                let value = ""
                if (item.page === "surgical" && item.available !== false) {
                    value = item
                }
                return value
            }).map((item, key) => {
                return (
                    <tr key={key + item.name}>
                        <th>{item.date}</th>
                        <th>{item.hour}</th>
                        <th>{item.name}</th>
                        <th><span className="item-selectable" onClick={() => selectCategory(item)}>Seleccionar</span></th>
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
        setItems(generateItemList(categoryList))
    }, [categoryItems, setCategory,categoryList])

    useEffect(()=>{
        getCategories()
    },[categorySelected])

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
                        <th></th>
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