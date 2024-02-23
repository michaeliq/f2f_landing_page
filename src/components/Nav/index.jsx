import { useEffect, useState } from "react"
import "../../styles/components/Nav.css"
import { Link, useLocation } from "react-router-dom"
import BoxItemNav from "../../molecules/BoxItemNav"

const Nav = () => {

    const [selectedPage, setPage] = useState("")
    const [selectedURL, setURL] = useState("")
    const {pathname, hash, key} = useLocation()

    const currentPath = pathname

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

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
          window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({behavior:"smooth"});
            }
          }, 0);
        }
      }, [pathname, hash, key])

    return (
        <div className="navbar">
            <ul className="navbar-link-container">
                <Link to={currentPath === "/surgical" ? "/surgical#form-section-sur":"/vision-care#form-section-vc"} className="navbar-link-item">
                    <BoxItemNav>
                        <li>Inscribase en el Ring</li>
                    </BoxItemNav>
                </Link>
                <Link to={currentPath === "/surgical" ? "/surgical#calendar-sur":"/vision-care#calendar-vc"} className="navbar-link-item">
                    <BoxItemNav>
                        <li>{currentPath === "/vision-care" ? "Vision Care":"Surgical"}</li>
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