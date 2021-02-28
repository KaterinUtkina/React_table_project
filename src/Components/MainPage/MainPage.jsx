import React from "react";
import stl from "./MainPage.module.css"
import {Link} from "react-router-dom";


const MainPage = () => {
    return (
        <div className={stl.main_page}>
            <p>
                Пожалуйста выберете, какой набор данных показать Вам в таблице?
            </p>
            <Link to={"/users/" + 32}>
                <div className="btn btn-outline-primary">
                    Маленький объем
                </div>
            </Link>
            <Link to={"/users/" + 1000} className={stl.button_table}>
                <div className="btn btn-outline-primary">
                    Большой объем
                </div>
            </Link>
        </div>
    );
}

export default MainPage;