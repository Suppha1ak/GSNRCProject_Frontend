import { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth , InandUp } from "../../service/auth.context.js";
const Signin = () => {

    const [signin, setSignin] = useState({
        username: "",
        password: "",
        roles: "",
      });
      const navigate = useNavigate();
      const { setIsLogged, setUsername , setRoles } = useAuth();
    
      const handleInputChange = (e) => {
        setSignin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSuccessfulLogin = (userData) => {
        setIsLogged(true);
        setUsername(userData.username);
        setRoles(userData.roles);
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        try {
          const response = await InandUp.login(signin.username, signin.password);
          handleSuccessfulLogin(response.data);
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      };

    return (

        <div className="card-create">
            <div className="image-side">
                <img
                    src="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                                <div className="error">

                                </div>
                                <div className="card-body">

                                    <form>
                                        <div className="from-group">
                                            <label htmlFor="name" className="createtext">
                                                Username
                                            </label> <br />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="brand"
                                                placeholder="username"
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="from-group">
                                            <label htmlFor="name" className="createtext">
                                                Password
                                            </label> <br />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="model"
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
                                                className="btn btn-danger form-control">
                                                <h3>Cancel</h3>
                                            </button>
                                           
                                            <li>
                                            <Link to="/Signup" className="btn btn-primary form-control mt-2">
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
    )
}

export default Signin;