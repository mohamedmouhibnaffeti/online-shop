export default function SidebarItem({icon, text, active, alert}:{icon: any, text: any, active: any, alert: any} ){
    return(
        <li className="text-black relative flex items-center py-2">
            {icon}
            <span> {text} </span>
        </li>
    )
}