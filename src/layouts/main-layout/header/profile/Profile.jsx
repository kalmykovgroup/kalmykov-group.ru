import './Profile.css'
import profileIcon from '/src/assets/profile.svg'
import {Link} from "react-router-dom";
function Profile() {

    return (
        <Link  className="profile"  to={`/profile`}>
            <img src={profileIcon} className="profileIcon" alt="profile"/>
            <span>Аккаунт</span>
        </Link>
    )
}

export default Profile
