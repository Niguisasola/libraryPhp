import image from "../assets/img/logotransparent.png"
import '../styles/navBar.css'
import {Link, NavLink} from "react-router-dom"

function NavBar (){
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-text">
        <div className="container-fluid" >
            <img className= "logo" src={image} alt="imagen logo"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/principal">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ="/newBook">Create</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Registration
                        </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><p className="dropdown-item">Sign-In</p></li>
                        <li><p className="dropdown-item">Log-In</p></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
}

export default NavBar;