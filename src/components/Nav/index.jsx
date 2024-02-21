import { useEffect, useState } from "react"
import "../../styles/components/Nav.css"
import { Link, useLocation } from "react-router-dom"
import BoxItemNav from "../../molecules/BoxItemNav"

const Nav = () => {

    const [selectedPage, setPage] = useState("")
    const [selectedURL, setURL] = useState("")
    const currentPath = useLocation().pathname

    const GetPathname = (currentPath) => {

        if (currentPath === "/vision-care") {
            setPage("Surgical")
            setURL("/surgical")
        }
        else if (currentPath === "/surgical") {
            setPage("Vision Care")
            setURL("/vision-care")
        }
    }

    useEffect(() => {
        GetPathname(currentPath)
    }, [currentPath])

    return (
        <div className="navbar">
            <ul className="navbar-link-container">
                <Link to={"/"} className="navbar-link-item">
                    <BoxItemNav>
                        <li>Inscribase en el Ring</li>
                    </BoxItemNav>
                </Link>
                <Link to={"/"} className="navbar-link-item">
                    <BoxItemNav>
                        <li>Agenda {currentPath === "/vision-care" ? "Vision Care":"Surgical"}</li>
                    </BoxItemNav>
                </Link>
                <Link to={selectedURL} className="navbar-link-item">
                    <BoxItemNav>
                        <li>{selectedPage}</li>
                    </BoxItemNav>
                </Link>
            </ul>
            </div>
    )
}

export default Nav