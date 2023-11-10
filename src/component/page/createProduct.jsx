import React from 'react'
import { Axios } from '../../service/auth.context';
import { Link, useNavigate } from 'react-router-dom';


const CreateProduct = () => {
  const[Carcenters, setCarcenters] = useState({
    name:"",
    type:"",
    img:""
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  

  const handleChange = (e) => {
    setCarcenters((prev) => ({...prev, [e.target.name]:e.target.value}));
  }

  const handleClick = async(e) => {
  e.preventDefault();
  try {
    await Axios.post(`/Carcenters`, Carcenters);
    navigate("/");
  } catch (error) {
    console.error(error);
    setError(true);
  }
  }

  const handleClear = (e) => {
    setCarcenters({
      brand:  "" ,
      model:  "" ,
      price: "" ,
      imageFirst: "",
      imageSecond:  "",
      imageThird:  "",
      firstprimarycolor:  "",
      secondprimarycolor:  "",
      thirdprimarycolor: ""
    });
    setError(false);
    navigate("/")
  }

  return (
    <div className="container">      
      <h1>GSNRCThailand</h1>
      <div className="row form">
      <div className="col-6 justify-cintent-center">
        <h5 className='card-header'> CreateProduct Cars</h5>
        <div className="error">{error && "Something went wrong !!"}</div>
        <div className="card-body">
          <form>
            <div className="from-group"  > 
            <label htmlFor="name">Carcenters brand</label>
            <input type="text" className="form-control"
            name="brand" placeholder="Carcenters brand"
            onChange={handleChange}
            value={Carcenters.brand}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters model</label>
            <input type="text" className="form-control"
            name="model" placeholder="Carcenters model"
            onChange={handleChange}
            value={Carcenters.model}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters price</label>
            <input type="text" className="form-control"
            name="price" placeholder="Carcenters price"
            onChange={handleChange}
            value={Carcenters.price}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters imageFirst</label>
            <input type="text" className="form-control"
            name="imageFirst" placeholder="Carcenters imageFirst"
            onChange={handleChange}
            value={Carcenters.imageFirst}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters imageSecond</label>
            <input type="text" className="form-control"
            name="imageSecond" placeholder="Carcenters imageSecond"
            onChange={handleChange}
            value={Carcenters.imageSecond}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters imageThird</label>
            <input type="text" className="form-control"
            name="imageThird" placeholder="Carcenters imageThird"
            onChange={handleChange}
            value={Carcenters.imageThird}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters firstprimarycolor</label>
            <input type="text" className="form-control"
            name="firstprimarycolor" placeholder="Carcenters firstprimarycolor"
            onChange={handleChange}
            value={Carcenters.firstprimarycolor}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters secondprimarycolor</label>
            <input type="text" className="form-control"
            name="secondprimarycolor" placeholder="Carcenters secondprimarycolor"
            onChange={handleChange}
            value={Carcenters.secondprimarycolor}
            />
          </div>

          <div className="from-group"  > 
            <label htmlFor="name">Carcenters thirdprimarycolor</label>
            <input type="text" className="form-control"
            name="thirdprimarycolor" placeholder="Carcenters thirdprimarycolor"
            onChange={handleChange}
            value={Carcenters.thirdprimarycolor}
            />
          </div>

          <Link to="" className="btn btn-success" onClick={handleClick}>Create</Link>
          {""}
          <Link to="/" className="btn btn-danger" onClick={handleClear}>Cancle</Link>
          </form>
        </div>
      </div>
      </div> 
    </div> 
  )
}

export default CreateProduct;