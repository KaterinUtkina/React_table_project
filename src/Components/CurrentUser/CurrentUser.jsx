import React from "react";

import stl from "./CurrentUser.module.css"


const CurrentUser = (props) => {
   return (
      <div>
          {props.user.address === undefined ? "У пользователя нет других данных" :
              <ul className="list-group" className={stl.list}>
                  <li className="list-group-item"> Выбран пользователь <b>{props.user.firstName}</b></li>
                  <li className="list-group-item"><label htmlFor="description">Описание:</label>
                      <textarea
                          id="description"
                          defaultValue={props.user.description}
                      /></li>
                  <li className="list-group-item"><span>Адрес проживания:</span>{' '}
                      <b>{props.user.address.streetAddress}</b></li>
                  <li className="list-group-item"><span>Город:</span> <b>{props.user.address.city}</b></li>
                  <li className="list-group-item"><span>Провинция/штат:</span> <b>{props.user.address.state}</b></li>
                  <li className="list-group-item"><span>Индекс:</span> <b>{props.user.address.zip}</b></li>
              </ul> }
        </div>
    );
}

export default CurrentUser;