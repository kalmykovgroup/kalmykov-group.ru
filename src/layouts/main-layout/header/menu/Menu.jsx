import './Menu.css'
import {useState} from "react";


function openMenu() {
    alert("Open");

}


function Menu() {
    const [colorIcon, setColorIcon] = useState("#000000");


    return (
        <button  className="menu" onClick={openMenu}
                 onMouseEnter={() => setColorIcon("#ffffff")}
                 onMouseLeave={() => setColorIcon("#000000")}>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke={colorIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Каталог</span>


        </button >
    )
}

export default Menu
