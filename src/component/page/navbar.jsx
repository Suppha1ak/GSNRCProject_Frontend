import { Link } from "react-router-dom";
const videoSrc = new URL("../../assets/video/background.mp4", import.meta.url)
  .href;

const Navbar = () => {
  return (
    <div>
      <video className="bg-video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="navBar">
          <h2 className="white-text">Hi , Username</h2>
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
