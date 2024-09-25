import { Icon } from "@iconify/react";
import logo from "../../../assets/blue-pixel.png"
import notfound from "../../../assets/404-img.png"
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
  return (
    <div className="p-[88px] flex justify-between items-center h-screen">
      <div className="w-[525px] flex flex-col gap-[24px]">
        <img alt="logo" src={logo} className="w-[185px] h-[32px]" />
        <h1 style={{lineHeight:"100px"}} className="font-bold text-[80px] capitalize m-0">
            <span className="text-[#1E43FA]">
               Sorry!
            </span>, this page isn't available
        </h1>
        <p className="text-[22px] text-[#757575] font-[600] tracking-[0.24px] capitalize m-0">
           The page you were looking for couldn't be found
        </p>
        <Button
            style={{
                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
            }}
            className="w-fit gap-2"
            onClick={()=>navigate(-1)}
        >
            <Icon icon="teenyicons:arrow-left-solid" fontSize={20} />
            <span className="capitalize">go back</span>
        </Button>
      </div>
      <div>
        <img alt="not-found" src={notfound} />
      </div>
    </div>
  );
};
export default NotFoundPage;