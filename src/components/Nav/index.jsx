import { useEffect, useState } from "react"
import "../../styles/components/Nav.css"
import { Link, useLocation } from "react-router-dom"
import BoxItemNav from "../../molecules/BoxItemNav"
import dots from "./header-dot.PNG"

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
            <img src={dots} className="left-dot-img" alt="dots"/>
            <ul className="navbar-link-container">
                <Link to={"/"} className="navbar-link-item">
                    <BoxItemNav>
                        Inscribase en el Ring
                    </BoxItemNav>
                </Link>
                <Link to={"/"} className="navbar-link-item">
                    <BoxItemNav>
                        Agenda
                    </BoxItemNav>
                </Link>
                <Link to={selectedURL} className="navbar-link-item">
                    <BoxItemNav>
                        {selectedPage}
                    </BoxItemNav>
                </Link>
            </ul>
            <img src={dots} className="right-dot-img" alt="dots"/>
        </div>
    )
}

export default Nav