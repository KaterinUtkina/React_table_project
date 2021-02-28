import React from "react";
import search_icon from "./search_icon.png"
import stl from "./SearchBar.module.css"


const SearchBar = (props) => {
    let onSearchBarTextChange = (event) => {
        let text = event.target.value;
        props.updateSearchBarText(text);
    }
    let click = () => {
        props.resetSorting();
        props.changeSearchResult();
    }
    return (
          <div className={stl.search_bar}>
              <input type="text" className={stl.input_search_bar} placeholder="Search..."
                     onChange={onSearchBarTextChange} value={props.searchBarText}/>
              <button type="button" onClick={click}
                      className="btn btn-primary"><img src={search_icon} alt=""/></button>
          </div>
    );
}

export default SearchBar;