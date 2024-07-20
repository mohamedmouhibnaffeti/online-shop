import { ScreenShareIcon } from "lucide-react";
import Sidebar from "../Components/SideBar";
import SidebarItem from "../Components/SideBarItem";

export default function DashMain(){
    return(
        <div className="bg-white">
            <Sidebar>
                <SidebarItem icon={<ScreenShareIcon size={20} />} text={"Overview"} active={true} alre />
            </Sidebar>
        </div>
    )
}