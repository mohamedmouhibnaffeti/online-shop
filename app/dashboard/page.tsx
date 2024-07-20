import { Dock, ScreenShareIcon, SendToBack } from "lucide-react";
import Sidebar from "../Components/SideBar";
import SidebarItem from "../Components/SideBarItem";

export default function DashMain(){
    return(
        <div className="bg-white">
            <Sidebar>
                <SidebarItem
                    icon={<ScreenShareIcon size={20} />}
                    text={"Overview"}
                    active={true}
                    alert={false}
                />
                <SidebarItem
                    icon={<SendToBack size={20} />}
                    text={"Articles"}
                    active={false}
                    alert={false}
                />
                <SidebarItem
                    icon={<Dock size={20} />}
                    text={"Categories"}
                    active={false}
                    alert={false}
                />
                <SidebarItem
                    icon={<SendToBack size={20} />}
                    text={"Commands"}
                    active={false}
                    alert={false}
                />
            </Sidebar>
        </div>
    )
}