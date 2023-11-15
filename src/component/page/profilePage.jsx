import {useAuth} from "../../service/auth.context.service/auth.context";

const ProfilePage = () => {
//10
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-refresh/only-export-components
    const { userData } = useAuth();
    return (
        <div className="row">
            <div className="card_profile">
                <div className="card-header">Profile</div>
                <img src="https://1417094351.rsc.cdn77.org/articles/9653/9652549/thumbnail/large.gif?1" alt="Hello" style={{width: 100 , height : 100 }} />
                <br></br>
                <div className="card-body_1">
                    <div className="card-title h5">{userData.username}</div>
                    <div className="card-text">
                        <b>Id:</b> {userData.id}
                        <br />
                        <b>Email::</b> {userData.email}
                        <br />
                        <b>Roles:</b> ({userData.roles})
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;