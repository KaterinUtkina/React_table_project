import React from "react";
import preloader from "./preloader.gif";
import stl from "./Preloader.module.css"


const Preloader = () => {
    return (
        <img src={preloader} alt="" className={stl.preloader}/>
    )
}

export default Preloader;