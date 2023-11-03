//ตัวจัดการเกี่ยวกับ Token ทั้งรีเฟรช และ ดึงโทเคนเพื่อนำไปใช้ต่อใน headers
const getLocalRefreshToken = () => { 
    const user = JSON.parse(localStorage.getItem("user") || 'null');
    return user?.refreshToken;
}

const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || 'null');
    return user?.accessToken;
}

const setLocalAccessToken = (token) => {
    const user = JSON.parse(localStorage.getItem("user") || 'null');
    if (user) {
        user.accessToken = token;
        localStorage.setItem("user", JSON.stringify(user));
    } else {
        user.accessToken = null;
        localStorage.setItem("user", JSON.stringify(user));
    }
}

const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user") || 'null');
    return user
};

const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}

const removeUser = () => {
    const user = localStorage.removeItem("user");
    return user
}

const authToken = {
    getLocalRefreshToken,
    getLocalAccessToken,
    setLocalAccessToken,
    getUser,
    setUser,
    removeUser,
  };
  
  export default authToken;
  