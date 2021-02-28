import {dataTableAPI} from "../api/api";
import SortUp from "../utils/SortUp";
import SortDown from "../utils/SortDown";

const SET_DATA = "SET-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_PAGE = "SET-PAGE";
const UPDATE_DATA_WIDTH_CURRENT_PAGE = "UPDATE-DATA-WIDTH-CURRENT-PAGE";
const SET_SORT_DATA = "SET-SORT-DATA";
const SET_SORT_DEFAULT_DATA = "SET-SORT-DEFAULT-DATA";
const ADD_NEW_USER = "ADD-NEW-USER";
const UPDATE_NEW_SEARCH_BAR_TEXT = "UPDATE-NEW-SEARCH-BAR-TEXT";
const SET_SEARCH_RESULT = "SET-SEARCH-RESULT";
const CHANGE_TOTAL_USERS_COUNT = "CHANGE-TOTAL-USERS-COUNT";


let initialState = {
    data: [],
    isFetching: false,
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1,
    changeDataWithPage: [],
    dataContainer: [],
    searchBarText: "",
}

const tableDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data,
                totalUsersCount: action.data.length,
                dataContainer: [...action.data],
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.numberPage,
            }
        case UPDATE_DATA_WIDTH_CURRENT_PAGE:
            return {
                ...state,
                changeDataWithPage: state.dataContainer.slice((state.currentPage - 1) * state.pageSize, (state.currentPage) * state.pageSize)
            }
        case SET_SORT_DATA:
            return {
                ...state,
                dataContainer: action.sortFunc(state.dataContainer, action.sortName)
            }
        case SET_SORT_DEFAULT_DATA:
            return {
                ...state,
                dataContainer: state.data,
            }
        case ADD_NEW_USER:
            return {
                ...state,
                data: [action.data, ...state.data],
                totalUsersCount: state.data.length + 1,
                dataContainer: [action.data, ...state.data],
            }
        case UPDATE_NEW_SEARCH_BAR_TEXT:
            return {
                ...state,
                searchBarText: action.newText,
            };
        case SET_SEARCH_RESULT:
            return {
                ...state,
                dataContainer: state.data.filter(obj => {
                    let objApprove = false;
                    for (let key in obj) {
                        let str = String(obj[key]);
                        let corrKey = str.toUpperCase();
                        if (corrKey.indexOf(state.searchBarText.toUpperCase()) > -1) {
                            objApprove = true;
                        }
                    }
                    if (objApprove) {
                        return obj;
                    } else {
                        return null;
                    }
                }),
                currentPage: 1,
            };
        case CHANGE_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: state.dataContainer.length,
            };
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setData = (data) => ({type: SET_DATA, data});
export const setPage = (numberPage) => ({type: SET_PAGE, numberPage});
export const updateDataTableWithPage = () => ({type: UPDATE_DATA_WIDTH_CURRENT_PAGE});
export const setSortData = (sortFunc, sortName) => ({type: SET_SORT_DATA, sortFunc, sortName});
export const setSortDefaultData = () => ({type: SET_SORT_DEFAULT_DATA});
export const addNewUser = (data) => ({type: ADD_NEW_USER, data});
export const updateSearchBarText = (text) => (
    {type: UPDATE_NEW_SEARCH_BAR_TEXT, newText: text});
export const setSearchResult = () => ({type: SET_SEARCH_RESULT});
export const changeTotalUsersCount = () => ({type: CHANGE_TOTAL_USERS_COUNT})

export const getData = (url) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dataTableAPI.getData(url).then(response => {
                dispatch(setData(response));
                dispatch(toggleIsFetching(false));
                dispatch(updateDataTableWithPage());
            }
        )
    }
}

export const setCurrentPage = (numberPage) => {
    return (dispatch) => {
        dispatch(setPage(numberPage));
        dispatch(updateDataTableWithPage());
    }
}

export const sortDataTable = (sort, sortName) => {
    return (dispatch) => {
        switch (sort) {
            case "Asc":
                dispatch(setSortData(SortUp, sortName));
                dispatch(updateDataTableWithPage());
                break;
            case "Desc":
                dispatch(setSortData(SortDown, sortName));
                dispatch(updateDataTableWithPage());
                break;
            case "":
                dispatch(setSortDefaultData());
                dispatch(setSearchResult());
                dispatch(updateDataTableWithPage());
                break;
            default:

        }
    }
}

export const addUser = (formData) => {
    return (dispatch) => {
        dispatch(addNewUser(formData));
        dispatch(updateDataTableWithPage());
        dispatch(updateSearchBarText(""));
    }
}

export const changeSearchResult = () => {
    return (dispatch) => {
        dispatch(setSearchResult());
        dispatch(changeTotalUsersCount());
        dispatch(updateDataTableWithPage());
    }
}

export default tableDataReducer;
