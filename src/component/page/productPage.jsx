import { useEffect, useState } from "react";
import Axios from "../../service/auth.service/axios.service";
import { Link } from "react-router-dom";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";
import { useAuth } from "../../service/auth.service/auth.context";

const ListPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setsearchText] = useState("");
  const { token, roles } = useAuth();

  useEffect(() => {
    const fetchlist = async () => {
      console.log(roles);
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
              {token && roles.includes("ADMIN") ? (
                <div className="right">
                  <input
                    type="text"
                    className="input-style"
                    name="name"
                    placeholder="Search brand"
                    value={searchText}
                    onChange={(event) => {
                      setsearchText(event.target.value);
                    }}
                  />
                  <Link to="/create">
                    <button className="successCreate">Create new!</button>
                  </Link>
                </div>
              ) : (
                <div className="right">
                  <input
                    type="text"
                    className="input-styleNoAdmin"
                    name="name"
                    placeholder="Search brand"
                    value={searchText}
                    onChange={(event) => {
                      setsearchText(event.target.value);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="cardSpace">
              {list
                .filter((item) => {
                  return item.brand
                    .toLowerCase()
                    .startsWith(searchText.toLowerCase());
                })
                .map((item) => {
                  return (
                    <div className="cardlist" key={item.id}>
                      <Link to={`/detail/${item.id}`}>
                        <img src={item.image} alt="Product" />
                        <div className="brand">{item.brand}</div>
                        <div className="price">{item.price}$</div>
                      </Link>
                    </div>
                  );
                })}
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
