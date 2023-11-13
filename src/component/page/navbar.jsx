import { Link } from "react-router-dom";
import { useAuth } from "../../service/auth.context.service/auth.context";
const videoSrc = new URL("../../assets/video/background.mp4", import.meta.url)
  .href;

const Navbar = () => {
  const { isLogged, username } = useAuth();
  return (
    <div>
      <video className="bg-video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="navBar">
        {isLogged ? (
          <h2 className="white-text">Hi, {username}</h2>
        ):<h2></h2>}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
