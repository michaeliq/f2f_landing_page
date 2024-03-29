import "../../styles/components/ListCategory.css"
import arrow_down from "../../images/category-arrow-down.png"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { RxReset } from "react-icons/rx";


const ListCategory = ({ setCategory, categorySelected }) => {

    const [tableItems, setItems] = useState(null)
    const [tableVisible, setTableVisible] = useState(false)
    const [categoryList, setCategoryList] = useState([])
    const [dialogListCategories, setCategoriesByDialog] = useState([])
    const [categorySelectedByList, setCategoryByList] = useState("")

    const { pathname } = useLocation()

    const getCategories = async () => {
        const categoryRequest = await fetch("https://entorno.advancesas.co:4500/api/category", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await categoryRequest.json()
        setCategoryList(data)
        filterCategories(data)
    }

    const generateItemList = () => {
        const itemList = categoryList.filter(item => {
            let value = ""
            if (item.date != "07/03" && item.available !== false && item.name === categorySelectedByList) {
                value = item
            }
            return value
        }).map((item, key) => {
            return (
                <tr key={key + item.name}>
                    <th>{item.date}</th>
                    <th>{item.hour}</th>
                    <th>{item.name}</th>
                    <th><span className="item-selectable" onClick={() => {
                        selectCategory(item)
                        setCategoryByList("")
                    }}>Seleccionar</span></th>
                </tr>
            )
        })
        return itemList
    }

    const filterCategories = () => {
        const uniqueCategoryNames = []
        categoryList.forEach((item) => {
            if (uniqueCategoryNames.indexOf(item?.name) === -1) {
                uniqueCategoryNames.push(item?.name)
            }
        })
        if (dialogListCategories.length <= 0) {
            setCategoriesByDialog(uniqueCategoryNames.sort())
            return
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
    }, [categoryList,categorySelectedByList])

    useEffect(() => {
        getCategories()
    }, [dialogListCategories,categorySelected])

    return (
        <div className="list-category-container">
            <div className="list-category button-display">
                <span className="list-category text-button">
                    Módulo
                </span>
                <div className="list-category-select-container">
                    {categorySelected} {categorySelectedByList && <span className="list-category-select-reset" onClick={() => setCategoryByList("")}><RxReset /></span>}
                    <img onClick={changeVisible} src={arrow_down} alt="Despliegue de categorias" className={`list-category img-button ${tableVisible ? "visible" : ""}`} />
                </div>
            </div>
            {!categorySelectedByList ?
                <div className={`list-category-dialog ${tableVisible ? "visible" : ""}`}>
                    <div className={`list-category-dialog-box`}>
                        {dialogListCategories.map((item, key) => (
                            <p onClick={() => { setCategoryByList(item) }} key={key}>{item}</p>
                        ))}
                    </div>
                </div> :
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
                </table>}
        </div>
    )
}

export default ListCategory