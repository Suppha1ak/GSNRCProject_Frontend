import { useState } from "react";
import Axios from "../../service/auth.context.service/axios.service";
import { useNavigate } from "react-router-dom";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";

const CreateProduct = () => {
  const [Carcenters, setCarcenters] = useState({
    brand: "",
    model: "",
    image: "",
    primaryColor: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (even) => {
    setCarcenters((prev) => ({
      ...prev,
      [even.target.name]: even.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await Axios.post(`/Carcenters`, Carcenters);
      navigate("/product");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleCancle = () => {
    navigate("/");
  };

  return (
    <div>
      {loading ? (
        <Loading animation={animationLoading} />
      ) : (
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
                    <h5 className="card-header"> CreateProduct Cars</h5>
                    <div className="error">
                      {error && "Something went wrong !!"}
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Brand Car
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="brand"
                            placeholder="brand"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Model Car
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="model"
                            placeholder="model"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Price Car
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            placeholder="price"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Image
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="image"
                            placeholder="image"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Primarycolor Car
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className="form-control"
                            name="primaryColor"
                            placeholder="primaryColor"
                            onChange={handleChange}
                          />
                        </div>

                        <button to="" className="success" onClick={handleClick}>
                          {" "}
                          Create{" "}
                        </button>
                        {""}
                        <button
                          to="/"
                          className="danger"
                          onClick={handleCancle}
                        >
                          {" "}
                          Cancle{" "}
                        </button>
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

export default CreateProduct;
