import {useEffect , useState}from 'react'
import {Axios} from '../../service/auth.context'
import Loading from '../../isLoading/loadingPage'
import animationLoading from '../../assets/videoJSON/loadingPage.json'

const ListPage = () => {

  const [list , setList]= useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchlist = async() => {
      try {
        const res = await Axios.get(`/Carcenters`);
        setList(res.data)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchlist();
  } , []);

  return (
    
    <div>
      {loading ? (
        <Loading animation = {animationLoading}  />
      ) : list !== null && list !== undefined ? (
        <div className='recomment'>
          
        </div>
      ) : (
        <h1 className="white-text">No data</h1>
      )}
    </div>
  )
}

export default ListPage