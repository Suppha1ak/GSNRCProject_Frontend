import React,{ useState, useEffect }  from 'react'
import { Axios } from "../../service/auth.context";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePage = () => {
  const [Carcenters, setCarcenters] = useState({
    brand: "",
    model: "",
    image:"",
    primaryColor: "",
    price:"",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await Axios.get(`/Carcenters/${id}`);
        setCarcenters(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetail();
  }, [id]);

  const handleChange = (even) => {
    setCarcenters((prev) => ({
      ...prev,
      [even.target.name]: even.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      
      await Axios.put(`/Carcenters/${id}`, Carcenters);
      setLoading (true);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleCancle = (e) => {
    navigate("/");
  };

  

  return (
    <div className="card-create">
      <div className="image-side">
        <img
          src={Carcenters.image}
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
                      </label> <br/>
                      <input
                        type="text"
                        className="form-control"
                        name="brand"
                        placeholder={Carcenters.brand}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="from-group">
                      <label htmlFor="name" className="createtext">
                      Model Car
                      </label> <br/>
                      <input
                        type="text"
                        className="form-control"
                        name="model"
                        placeholder="model"
                        onChange={handleChange}
                        value={Carcenters.model}
                      />
                    </div>

                    <div className="from-group">
                      <label htmlFor="name" className="createtext">
                      Price Car
                      </label> <br/>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                        value={Carcenters.price}
                      />
                    </div>

                    <div className="from-group">
                      <label htmlFor="name" className="createtext">
                      Image
                      </label> <br/>
                      <input
                        type="text"
                        className="form-control"
                        name="image"
                        placeholder="image"
                        onChange={handleChange}
                        value={Carcenters.image}
                      />
                    </div>

                    <div className="from-group">
                      <label htmlFor="name" className="createtext">
                      Primarycolor Car
                      </label> <br/>
                      <input
                        type="text"
                        className="form-control"
                        name="primarycolor"
                        placeholder="primarycolor"
                        onChange={handleChange}
                        value={Carcenters.primaryColor}
                      />
                    </div>

    
                    <button to="" className="warning" onClick={handleClick} > Update </button>
                    {""}
                    <button to="/" className="danger" onClick={handleCancle} > Cancle </button>
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



export default UpdatePage;