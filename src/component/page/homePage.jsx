import { Link } from "react-router-dom";
import { useAuth } from "../../service/auth.context.service/auth.context";

const HomePage = () => {
  const { isLogged } = useAuth();

  return (
    <div className="content">
      <div className="NameSpace" style={{ width: "50%" }}>
        <div className="tnx">
          <h2>
            <i className="fas fa-map-marker-alt"></i> GSNRCThailand
          </h2>
        </div>
        <div className="txt">
          <h1>HE</h1>
          <h1>LLO.</h1>
          <div className="hello-parent">
            <svg
              className="hello-word"
              width="365"
              height="365"
              viewBox="920 -235 800 800"
            >
              <g id="H-letter">
                <line
                  className="H-left-stroke"
                  x1="17"
                  y1="0"
                  x2="17"
                  y2="124"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="H-mid-stroke"
                  x1="33"
                  y1="62"
                  x2="68"
                  y2="62"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="H-right-stroke"
                  x1="84"
                  y1="0"
                  x2="84"
                  y2="124"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
              </g>

              <g id="E-letter">
                <line
                  className="E-left-stroke"
                  x1="138"
                  y1="0"
                  x2="138"
                  y2="124"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="E-top-stroke"
                  x1="154"
                  y1="17"
                  x2="201"
                  y2="17"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="E-mid-stroke"
                  x1="154"
                  y1="62"
                  x2="196"
                  y2="62"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="E-bottom-stroke"
                  x1="154"
                  y1="107"
                  x2="201"
                  y2="107"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
              </g>

              <g id="L-one-letter">
                <line
                  className="L-one-long-stroke"
                  x1="17"
                  y1="153"
                  x2="17"
                  y2="277"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="L-one-short-stroke"
                  x1="33"
                  y1="260"
                  x2="77"
                  y2="260"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
              </g>

              <g id="L-two-letter">
                <line
                  className="L-two-long-stroke"
                  x1="104"
                  y1="153"
                  x2="104"
                  y2="277"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
                <line
                  className="L-two-short-stroke"
                  x1="120"
                  y1="260"
                  x2="164"
                  y2="260"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="34"
                />
              </g>

              <g id="O-letter">
                <circle
                  className="O-stroke"
                  cx="231"
                  cy="215"
                  r="48"
                  stroke="#FFF"
                  fill="none"
                  strokeWidth="31"
                />
              </g>

              <g id="red-dot">
                <line
                  x1="325"
                  y1="260"
                  x2="325"
                  y2="260"
                  stroke="#FF5851"
                  className="red-dot"
                />
              </g>
            </svg>
          </div>
        </div>
        <p>
        In 1886, Carl Bentz German engineers successfully created the world is 
        first combustion engine car. Benz Patent Motorwagen uses a reciprocating-like structure of a steam engine. 
        It has simply added a device that converts fuel in liquid form into gas. And added an exhaust intake valve in the form of a 4-stroke engine.
        </p>
      </div>
      <div className="card" style={{ width: "50%" }}>
        <Link to="/product">
          <div className="box1">
            <h2>Product</h2>
          </div>
        </Link>
        {isLogged ? (
          <Link to="/profile"> {/* ให้เปลี่ยน "/profile" เป็น path ที่คุณต้องการ */}
            <div className="box2">
              <h2>Profile</h2>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="box2">
              <h2>Login</h2>
            </div>
          </Link>
        )}
        <Link to="/about">
          <div className="box3">
            <h2>About</h2>
          </div>
        </Link>
        <Link to="/contact">
          <div className="box4">
            <h2>Contact</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;