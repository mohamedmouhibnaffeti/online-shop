export default function SidebarItem({icon, text, active, alert}:{icon: any, text: any, active: any, alert: any} ){
    return(
        <li className={`
            text-black relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer transition-colors
            ${active ? "bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-"}
        `}>
            {icon}
            <span> {text} </span>
        </li>
    )
}