import { useState } from "react";
import Axios from "../../service/auth.context.service/axios.service";
import { useNavigate } from "react-router-dom";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";
import Swal from "sweetalert2";

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
      // ตรวจสอบว่ามีช่อง input ใดๆ ที่เป็นค่าว่างหรือไม่
      if (
        !Carcenters.brand ||
        !Carcenters.model ||
        !Carcenters.price ||
        !Carcenters.image ||
        !Carcenters.primaryColor
      ) {
        // ใช้ Swal เพื่อแจ้งเตือน
        Swal.fire({
          icon: "error",
          title: "Empty Fields",
          text: "Please fill in all fields.",
        });
        return;
      }

      setLoading(true);
      await Axios.post(`/Carcenters`, Carcenters);
      navigate("/product");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleCancle = () => {
    navigate("/product");
  };

  return (
    <div>
      {loading ? (
        <Loading animation={animationLoading} />
      ) : (
        <div className="card-create">
          <div className="image-side">
            {Carcenters.image !== "" ? (
              <img src={Carcenters.image} alt="Preview Image" />
            ) : (
              <img
                src="https://wallpaperaccess.com/full/1838812.jpg"
                alt="Preview Image"
              />
            )}
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
                          <label htmlFor="brand" className="createtext">
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
                          <label htmlFor="model" className="createtext">
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
                          <label htmlFor="price" className="createtext">
                            Price Car
                          </label>{" "}
                          <br />
                          <input
                            type="number"
                            className="form-control"
                            name="price"
                            placeholder="price"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="image" className="createtext">
                            Image
                          </label>{" "}
                          <br />
                          <textarea
                            type="text"
                            className="form-control"
                            name="image"
                            placeholder="image"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="primaryColor" className="createtext">
                            Primarycolor Car
                          </label>{" "}
                          <br />
                          <select
                            className="form-control"
                            name="primaryColor"
                            onChange={handleChange}
                          >
                            <option value="" hidden>
                              Please select a color
                            </option>
                            <option value="Black">ดำ</option>
                            <option value="White">ขาว</option>
                            <option value="Gray">เทา</option>
                          </select>
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
