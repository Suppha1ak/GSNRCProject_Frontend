import { useLottie } from "lottie-react";

const style = {
  height: 300,
};

const Loading_Page = ({ animation }) => {
  //ต้องขึ้นต้นด้วยตัวใหม่เหตุผลไม่รู้คับ
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Loading_Page;
