import { useSelector } from "react-redux";
import Nav from "../Navs&Bars/Nav";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/firebase-config";
import "./Parts.css"
import { useNavigate } from "react-router-dom";

export default function Account() {
    const user = useSelector(selectUser);
    const nav = useNavigate();
    return (
        <div className="profile">
            <Nav />
            <div className="profile-body">
                <h1> Edit Profile</h1>
                <div className="profile-info">
                    <img src="https://media.istockphoto.com/id/1161086164/vector/avatar-flat-icon-on-black-background-black-style-vector-illustration.jpg?s=170667a&w=0&k=20&c=RIX6VEZkAyyRE1DhtePdlr9qBwcR95Heukts3mePhC0=" alt="" />
                    <div className="profile-info-details">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3> Plans </h3>
                            <div className="profile-plan">
                                
                            </div>
                            <button className="profile-signout" onClick={() => auth.signOut()}> Sign Out</button>
                            <button className="profile-signout" onClick={() => nav("/savedshows")}> My Shows</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}