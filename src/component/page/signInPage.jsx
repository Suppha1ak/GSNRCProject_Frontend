import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SigninAndSignup from "../../service/auth.service/signIn.singUp.service";
import Loading from "../../isLoading/loadingPage";
import animationLoading from "../../assets/videoJSON/loadingPage.json";
import Swal from "sweetalert2";

const Signin = () => {
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // ตรวจสอบช่องว่าง
      if (signin.username === "" || signin.password === "") {
        throw new Error("Text Empty");
      }

      // ตรวจสอบ username ไม่มีอักษรพิเศษ
      if (!/^[a-zA-Z0-9]+$/.test(signin.username)) {
        throw new Error("Invalid characters in Username");
      }

      // ตรวจสอบรหัสผ่านต้องมีความยาวมากกว่าหรือเท่ากับ 8 ตัว
      if (signin.password.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }

      setLoading(true);
      await SigninAndSignup.login(signin.username, signin.password);
      navigate("/");
      // ล็อคอินสำเร็จ
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You can use webservice.",
      }).then((result) => {
        if (result.isConfirmed) {
          // รีโหลดหน้าเว็บทันที
          window.location.reload();
        }
      });
    } catch (error) {
      // แสดงข้อความแจ้งเตือนถ้ามีข้อผิดพลาด
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred during login.";

      console.log(errorMessage); // ตรวจสอบค่า errorMessage ที่ถูกเก็บ

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } finally {
      setLoading(false);
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
        <div className="card_sign">
          <div className="image-side">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
              alt="Card Image"
            />
          </div>
          <div className="detail-side">
            <div className="detail">
              <div className="container">
                <h1 className="createtext">GSNRCThailand</h1>
                <div className="row form">
                  <div className="col-6 justify-cintent-center">
                    <h1 className="card-header"> Login</h1>
                    <div className="error"></div>
                    <div className="card-body">
                      <form>
                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Username
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            className=""
                            name="username"
                            placeholder="username"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="from-group">
                          <label htmlFor="name" className="createtext">
                            Password
                          </label>{" "}
                          <br />
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="d-grid">
                          <button
                            type="button"
                            className="successsign"
                            onClick={handleClick}
                          >
                            <h3>Login</h3>
                          </button>
                          <button
                            type="button"
                            className="dangersign"
                            onClick={handleCancle}
                          >
                            <h3>Cancel</h3>
                          </button>
                          <li>
                            <Link to="/signup" className="LinktoLogin">
                              <h3>Signup</h3>
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
      )}
    </div>
  );
};

export default Signin;
