import DashboardSidebar from "./sidebar";
import DashboardNavbar from "./navbar";
import DashboardMaincontent from "./maincontent";
import ONBording from "./components/onboarding";
import { Outlet } from "react-router-dom";
import SpeadDialComponent from "./components/speadIdeal";
import { useTheme } from "../../contexts/themecontext";



const ClientDashboard = () =>{

    const {theme} = useTheme()

    return(
        <div className={`${theme==="light"?"":"dark"} flex w-screen`}>
           <DashboardSidebar />
           <div className="flex flex-col w-full h-screen overflow-hidden">
              <DashboardNavbar />
              <DashboardMaincontent>
                <Outlet />
            </DashboardMaincontent>   
            <SpeadDialComponent />
           </div>
           <ONBording />
        </div>
    )
}
export default ClientDashboard;