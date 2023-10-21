import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBars.css";
import { auth } from "../../firebase/firebase-config";

export default function Nav() {
    const [handleShow, setHandleShow] = useState(false);
    const nav = useNavigate();

    const transionNav = () => {
        if (window.scrollY > 100) {
            setHandleShow(true);
        } else {
            setHandleShow(false);
        }
    } 
    
    useEffect(() => {
        window.addEventListener("scroll", transionNav);
        return () => window.removeEventListener("scroll", transionNav);
    }, []);

    return (
        <div className={`nav ${handleShow && "nav-black"}`}>
            <div className="nav-content">
                <img 
                    onClick={() => nav("/")}
                    className="nav-logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                    alt=""
                />
                <div className="accont">
                    <button onClick={() => auth.signOut()}> Sign Out </button>
                </div>
            </div>
        </div>
    )
}