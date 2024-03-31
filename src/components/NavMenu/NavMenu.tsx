import { useState } from "react";
import "./NavMenu.scss";
import { useUser, useUserUpdate } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function NavMenu() {
    const [activeMenu, setActiveMenu] = useState(false);
    const user = useUser();
    const updateUser = useUserUpdate();
    const navigate = useNavigate();

    function handleLogout() {
        updateUser && updateUser(null);
        navigate("/login");
    }
    return (
        <>
            <button
                className="nav-menu-control"
                onClick={() => setActiveMenu((prev) => !prev)}
            >
                {/* <img src="/assets/menu.png" alt="menu control icon" /> */}
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={activeMenu ? "menu active" : "menu"}>
                <li className="menu-item">
                    <a href="/">Home</a>
                </li>
                <li className="menu-item">
                    <a href="/">About</a>
                </li>
                <li className="menu-item">
                    <a href="/">Contact</a>
                </li>
                <li className="menu-item">
                    <a href="/">Agents</a>
                </li>
                {user ? (
                    <>
                        <li className="menu-item">
                            <a href="/my-profile">My profile</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={handleLogout}>Log out</a>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="menu-item">
                            <a href="/login">Sign in</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Sign up</a>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
}
