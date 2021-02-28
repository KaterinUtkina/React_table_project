import React from "react";
import Table from "./Table";
import {connect} from "react-redux";
import Preloader from "../Common/Preloader";
import {
    addUser,
    changeSearchResult,
    getData,
    setCurrentPage,
    sortDataTable,
    updateSearchBarText
} from "../../redux/tableDataReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class TableContainer extends React.Component {

    componentDidMount() {
        let row = this.props.match.params.row;
        let url = `http://www.filltext.com/?rows=${row}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
        this.props.getData(url);
    }

    state = {
        currentUser: null,
        sortName: "",
        sort: "",
        modalNewUserOpen: false,
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
    }

    rowClick = (user) => {
        this.setState({currentUser: user});
    }
    headClick = (event) => {
        if (this.state.sortName === event) {
            if (this.state.sort === '') {
                this.setState({sort: "Asc"});
                this.props.sortDataTable("Asc", event)
            } else {
                if (this.state.sort === "Asc") {
                    this.setState({sort: "Desc"})
                    this.props.sortDataTable("Desc", event)
                } else {
                    this.setState({sort: ""})
                    this.props.sortDataTable("", event)
                }
            }
        } else {
            this.setState({sort: "Asc"})
            this.props.sortDataTable("Asc", event)
        }
        this.setState({sortName: event});
    }

    openModalNewUser = () => {
        this.state.modalNewUserOpen === false ? this.setState({modalNewUserOpen: true})
            : this.setState({modalNewUserOpen: false})
    }
    resetSorting = () => {
        this.setState({sort: ""})
    }

    render() {
        return (
            <>
                {this.props.dataTable.isFetching ? <Preloader/> :
                    <Table dataTable={this.props.dataTable} onPageChanged={this.onPageChanged}
                           rowClick={this.rowClick} currentUser={this.state.currentUser}
                           headClick={this.headClick} sort={this.state.sort} sortName={this.state.sortName}
                           sortData={this.sortData} openModalNewUser={this.openModalNewUser}
                           modalNewUserOpen={this.state.modalNewUserOpen} addUser={this.props.addUser}
                           updateSearchBarText={this.props.updateSearchBarText} searchBarText={this.props.dataTable.searchBarText}
                           changeSearchResult={this.props.changeSearchResult} resetSorting={this.resetSorting}/>
                }
            </>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        dataTable: state.dataTable
    }
}

export default compose(
    connect(mapStateToProps, {
        getData,
        setCurrentPage,
        sortDataTable,
        addUser,
        updateSearchBarText,
        changeSearchResult
    }),
    withRouter,
)(TableContainer)