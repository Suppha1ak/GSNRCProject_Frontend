import { useState, useEffect } from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import Axios from "../../service/auth.context.service/axios.service";
import Swal from "sweetalert2";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";


const DetailPage = () => {
  const [detaillist, setDetaillist] = useState({
    brand: "",
    model: "",
    price: "",
    image: "",
    primaryColor: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await Axios.get(`/Carcenters/${id}`);
        setDetaillist(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetail();
  }, [id]);

  const handleButtonClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "คุณต้องการจะจองรถคันนี้จริงเหรอ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่! จองเลย",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "กรุณารอฟังผลผ่านอีเมล์ใน 2-3วัน.",
          icon: "success",
        });
      }
    });
  };

  const handleButtonDelete = async () => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        await Axios.delete(`/Carcenters/${id}`);
        console.log(id);
        navigate("/");
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      {loading ? (
        <Loading animation={animationLoading} />
      ) : (
        <div className="body-detail">
          <div className="card-detail">
            <div className="image-side">
              <img src={detaillist.image} alt="Card Image" />
            </div>
            <div className="detail-side">
              <div className="detail">
                <h2>{detaillist.brand}</h2>
                <p>รุ่น : {detaillist.model}</p>
                <p>สี : {detaillist.primaryColor}</p>
                <p>ราคา : {detaillist.price}$</p>
                <button
                  className="styledButtondetail"
                  onClick={handleButtonClick}
                >
                  จองทันที!
                </button>
                
                <Link to={`/update/${detaillist.id}`} className="warning"  > แก้ไข </Link>

                <button className="danger" onClick={handleButtonDelete}> ลบ </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
