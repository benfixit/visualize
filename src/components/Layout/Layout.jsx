import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <nav>
                <ul id="links">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/practice"}>Practice</Link>
                    </li>
                    <li>
                        <Link to={"/visual"}>Visualize</Link>
                    </li>
                </ul>
                <ul id="settings">
                    <FontAwesomeIcon icon={faLightbulb} className="theme-switcher" />
                </ul>
            </nav>

                <Outlet />
        </>
    );
}

export default Layout;