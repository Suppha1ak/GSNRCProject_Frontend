import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SigninAndSignup from "../../service/auth.context.service/signIn.singUp.service";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await SigninAndSignup.register(user.username, user.email, user.password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading animation={animationLoading} />
      ) : (
        <div className="card_sign">
          <div className="image-side">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg"
              alt="Card Image"
            />
          </div>
          <div className="detail-side">
            <div className="detail">
              <div className="container">
                <h1 className="createtext">GSNRCThailand</h1>
                <div className="row form">
                  <div className="col-6 justify-cintent-center">
                    <h1 className="card-header"> Register </h1>
                    <div className="error"></div>
                    <div className="card-body">
                      <form>
                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Username
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Email address"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Email address
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email address"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Password
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="password"
                            placeholder="Email address"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Confirm Password
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="Confirm"
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            type="button"
                            className="btn btn-success form-control"
                            onClick={handleClick}
                          >
                            <h3> Register </h3>
                          </button>
                          <li>
                            <Link
                              to="/login"
                              className="btn btn-primary form-control mt-2"
                            >
                              <h3>Signin</h3>
                            </Link>
                          </li>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
