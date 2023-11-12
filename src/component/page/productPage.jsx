import { useEffect, useState } from "react";
import { Axios } from "../../service/auth.context";
import { Link } from "react-router-dom";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";

const ListPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("search");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const res = await Axios.get(`/Carcenters`);
        setList(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchlist();
  }, []);


  return (
    <div>
      {loading ? (
        <Loading animation={animationLoading} />
      ) : list !== null && list !== undefined ? (
        <div>
          <div className="recomment" />
          <div className="cardproduct">
            <div className="headercard">
              <div className="left">
                <h1>NOVIDADES</h1>
              </div>
              <div className="right">
                <div className="dropdown">
                  <select
                    id="cars"
                    className="custom-dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >

                    <option 
                      value="search"
                      style={{
                        display:
                          selectedOption === "search" ? "none" : "block",
                      }}    >
                      search
                    </option>
                    <option value="Toyota">Toyota</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Other">อื่น ๆ</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="cardSpace">
              {list.map((item, index) => (
                <div className="cardlist" key={index}>
                  <Link to={`/detail/${item.id}`}>
                    <img src={item.image} alt="Product" />
                    <div className="brand">{item.brand}</div>
                    <div className="price">{item.price}$</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="white-text">No data</h1>
      )}
    </div>
  );
      };


export default ListPage;
