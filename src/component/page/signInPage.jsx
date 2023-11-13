import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SigninAndSignup  from "../../service/auth.context.service/signIn.singUp.service";

const Signin = () => {
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        console.log(signin.username);
        console.log(signin.password);
      await SigninAndSignup.login(signin.username, signin.password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card_sign">
      <div className="image-side">
        <img
          src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
          alt="Card Image"
        />
      </div>
      <div className="detail-side">
        <div className="detail">
          <div className="container">
            <h1 className="createtext">GSNRCThailand</h1>
            <div className="row form">
              <div className="col-6 justify-cintent-center">
                <h1 className="card-header"> Login</h1>
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
                        placeholder="username"
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
                        placeholder="Password"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="button"
                        className="btn btn-success form-control"
                        onClick={handleClick}
                      >
                        <h3>Login</h3>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger form-control"
                      >
                        <h3>Cancel</h3>
                      </button>

                      <li>
                        <Link
                          to="/signup"
                          className="btn btn-primary form-control mt-2"
                        >
                          <h3>Signup</h3>
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
  );
};

export default Signin;
