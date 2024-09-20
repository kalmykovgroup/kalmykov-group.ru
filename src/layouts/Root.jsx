import './Root.css'
import {Outlet} from "react-router";
import React from "react";


const Root = () => {

    const [darkening, setDarkening] = React.useState("none");
    return (
        <>
            <div style={{display: darkening}} className="darkening"></div>
            <Outlet context={{setDarkening : setDarkening}}/>
        </>
    );
}

export default Root
