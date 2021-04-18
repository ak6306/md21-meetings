import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Menu from './../menu.svg'
import {SidebarData} from './SidebarData'
function Sidebar() {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
        <div className="navbar">
            <Link to ="#" className="">
                <img src ={Menu} onClick = {showSidebar}/>
            </Link>
        </div>
        <nav className ={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className = 'nav-menu-items'>
                <li className="navbar-toggle">
                <Link to ="#" className="">
                    <img src ={Menu} onClick = {showSidebar} style= {{paddingLeft: '20px'}}/>
                </Link>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className ={sidebar? 'nav-text active': 'nav-text'}>
                            <Link to ={item.path}>
                                <img src={item.icon}/>
                                <span className = {sidebar? 'nav-span active': 'nav-span'}>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
