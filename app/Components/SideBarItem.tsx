export default function SidebarItem({icon, text, active, alert}:{icon: any, text: any, active: any, alert: any} ){
    return(
        <li>
            {icon}
            <span> {text} </span>
        </li>
    )
}