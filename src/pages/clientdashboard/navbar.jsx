import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import ChangeMode from "../../components/global/changemode";
import ChangeLang from "../../components/global/changelang";

const DashboardNavbar = () =>{
  
  const location = useLocation()
  const handleNavheader = () =>{
    if(location.pathname.includes("source")){
      return "Source"
    }else if(location.pathname.includes("destination")){
      return "Destination"
    }else if(location.pathname.includes("automation")){
      return "Automation"
    }else if(location.pathname.includes("analytic")){
      return "Analytic"
    }else{
      return <>Welcome back, <span className="text-[#1E43FA] dark:text-white">mohamed</span></>
    }
  }
    return(
        <div className="bg-white px-6 py-4 border-y-[1px] dark:bg-[#171C32] dark:border-none">
          <div className="flex justify-between items-center gap-x-8">
            <p className="text-[18px] text-[#0E1B26] dark:text-white font-[600]">
              {handleNavheader()}
            </p>
            <div className="flex items-center gap-x-6">
                <div className="flex items-center gap-x-6 pr-4 border-black border-r-[1px]">
                  <ChangeMode />
                  <ChangeLang />
                  <Icon icon="fa6-solid:bell" fontSize={20} className="text-black dark:text-white" />
                </div>
                <Button 
                 className="my-fourth-step bg-inherit text-[#1E43FA] hover:bg-initial border border-[#1E43FA] py-2
                 dark:text-white dark:border-white"
                 asChild
                >
                    <Link className="flex items-center gap-2" to={"#"}>
                       <Icon icon="mynaui:telephone-call" fontSize={35} />
                       <span>Take With Export</span>
                    </Link>
                </Button>
            </div>
          </div>
        </div>
    )
}
export default DashboardNavbar;