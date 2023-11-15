import { useAuth } from "../../service/auth.context.service/auth.context";

const ProfilePage = () => {
  //10
  /* eslint-disable no-unused-vars */
  // eslint-disable-next-line react-refresh/only-export-components
  const { userData } = useAuth();
  return (
    <div className="row">
      <div className="card_profile">
        <img
          className="imgProfile"
          src="https://1417094351.rsc.cdn77.org/articles/9653/9652549/thumbnail/large.gif?1"
          alt="Hello"
        />
        <br></br>
        <div className="card-body_1">
          <div className="textprofile">
            <b>Id:</b> {userData.id}
          </div>
          <div className="textprofile">
            <b>Username: </b>
            {userData.username}
          </div>
          <div className="textprofile">
            <b>Email:</b> {userData.email}
          </div>
          <div className="textprofile">
            <b>Roles:</b> ({userData.roles})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
