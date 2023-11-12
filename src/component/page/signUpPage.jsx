import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [user, setUser] = useState({

        username: "",
        password: "",


    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
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
                                <h1 className="card-header"> Register </h1>
                                <div className="error">

                                </div>
                                <div className="card-body">

                                    <form>
                                        <div className="from-group">
                                            <label htmlFor="name" className="createtext">
                                                Email address
                                            </label> <br />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="brand"
                                                placeholder="Email address"
                                            />
                                        </div>

                                        <div className="from-group">
                                            <label htmlFor="name" className="createtext">
                                                Confirm email address
                                            </label> <br />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="model"
                                                placeholder="Confirm email address"
                                            />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button
                                                type="button"
                                                className="btn btn-success form-control"                                           >
                                                <h3> Register </h3>
                                            </button>
                                            <li>
                                            <Link to="/Signin" className="btn btn-primary form-control mt-2">
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
    )
}

export default Signup;