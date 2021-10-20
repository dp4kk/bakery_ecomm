import React,{useContext} from 'react'
import { useStyles } from "../Styles/styles";
import { SearchInputContext } from "../Context/SearchContext";
import {InputBase} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
const Search = () => {
     const { query, setQuery } = useContext(SearchInputContext);
     const classes = useStyles();
    //  search function
     function onSearch({ currentTarget }) {
       setQuery(currentTarget.value);
     }
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
          placeholder="Search"
          value={query}
          onChange={onSearch}
        />
      </div>
    );
}

export default Search
