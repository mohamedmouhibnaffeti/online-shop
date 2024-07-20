export default function SidebarItem({icon, text, active, alert}:{icon: any, text: any, active: any, alert: any} ){
    return(
        <li className={`
        `}>
            {icon}
            <span> {text} </span>
        </li>
    )
}