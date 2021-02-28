import React from "react";
import stl from "./Table.module.css"
import CurrentUser from "../CurrentUser/CurrentUser";
import {Link} from "react-router-dom";
import FormUser from "../FormUser/FormUser";
import SearchBar from "../SearchBar/SearchBar";


const Table = (props) => {
    let pagesCount = Math.ceil(props.dataTable.totalUsersCount / props.dataTable.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let submit = (formData) => {
        props.addUser(formData);
        props.openModalNewUser();
    }
    return (
        <div className={stl.wrapper_table}>
            <div>
                <Link to={"/"} className={stl.button_back}>
                    <div className="btn btn-outline-primary">
                        Назад
                    </div>
                </Link>
                <button className="btn btn-outline-primary" onClick={props.openModalNewUser}>
                    Добавить нового пользователя
                </button>
                {props.modalNewUserOpen ? <div className={stl.form_table}>
                    <FormUser submit={submit} />
                </div> : null}
                <SearchBar updateSearchBarText={props.updateSearchBarText} changeSearchResult={props.changeSearchResult}
                           resetSorting={props.resetSorting} searchBarText={props.searchBarText}/>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th data-sort="id" onClick={() => props.headClick("id")}>
                            <span className={stl.head_item}>id</span>
                            {props.sortName === "id" ? <span className={stl.key_sort}>{props.sort}</span> : null}
                        </th>
                        <th data-sort="firstName" onClick={() => props.headClick("firstName")}>
                            <span className={stl.head_item}>firstName</span>
                            {props.sortName === "firstName" ? <span className={stl.key_sort}>{props.sort}</span> : null}
                        </th>
                        <th data-sort="lastName" onClick={() => props.headClick("lastName")}>
                            <span className={stl.head_item}>lastName</span>
                            {props.sortName === "lastName" ? <span className={stl.key_sort}>{props.sort}</span> : null}
                        </th>
                        <th data-sort="email" onClick={() => props.headClick("email")}>
                            <span className={stl.head_item}>email</span>
                            {props.sortName === "email" ? <span className={stl.key_sort}>{props.sort}</span> : null}
                        </th>
                        <th data-sort="phone" onClick={() => props.headClick("phone")}>
                            <span className={stl.head_item}>phone</span>
                            {props.sortName === "phone" ? <span className={stl.key_sort}>{props.sort}</span> : null}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.dataTable.changeDataWithPage.map(user => {
                        let n = Math.floor(Math.random() * 10000);
                        return (
                            <tr onClick={event => props.rowClick(user)} key={user.id + '_' + n}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        );
                    })
                    }
                    </tbody>
                </table>
                {props.currentUser ? <CurrentUser user={props.currentUser}/> : null}
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {pages.map((page) => {
                        return (
                            <li onClick={() => props.onPageChanged(page)} key={page}
                                className={props.dataTable.currentPage === page ? stl.selectedPage : undefined}>
                                <span className="page-link">{page}</span></li>)
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Table;
