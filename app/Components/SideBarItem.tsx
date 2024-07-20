export default function SidebarItem({icon, text, active, alert}:{icon: any, text: any, active: any, alert: any} ){
    return(
        <li className="text-black">
            {icon}
            <span> {text} </span>
        </li>
    )
}