import { useState, useEffect } from "react";
import { Axios } from "../../service/auth.context";
import { Link } from "react-router-dom";

const Search = () => {
  const [Carcenters, setCarcenters] = useState([]);
  const [searchText, setsearchText] = useState([]);
  useEffect(() => {
    const fetchAllCarcenters = async () => {
      try {
        const car = await Axios.get(`/Carcenters`);
        setCarcenters(car.data);
      } catch (error) {}
    };
    fetchAllCarcenters();
  }, []);


  return (
    <div>
      <h1>Carcenters</h1>
      <from className="d-flex grid">
        <input 
          type="text"
          className="from-control"
          name="name"
          placeholder="Search brand"
          value={searchText}
          onChange={(event) => {
            setsearchText(event.target.value);
          }}
        />
      </from>
      <div className="row">
        <div className="Carcenters">
          {Carcenters.filter((Carcenters) => {
              return Carcenters.brand.includes(searchText);
            })
            .map((Carcenters) => {
              return (
                <div className="cardSpace">
                  <div className="cardlist">
                    <Link to={`/detail/${Carcenters.id}`}>
                      <img src={Carcenters.image} alt="Product" />
                      <div className="brand">{Carcenters.brand}</div>
                      <div className="price">{Carcenters.price}$</div>
                    </Link>
                  </div>
                
              </div>
              );
            })}
          ;
        </div>
      </div>
    </div>
  );
};

export default Search;
