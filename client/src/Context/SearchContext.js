import React, { createContext, useReducer,useState,useCallback} from 'react'
import data from '../datas.json'
import {SearchReducer} from './SearchReducer'
import {SEARCH} from './Actions'
export const SearchInputContext = createContext();
        


const SearchContext = ({children}) => {
const initialState = {
  data: data,
}; 
    const [query,setQuery]=useState('')

    const[state,dispatch]=useReducer(SearchReducer,initialState)

      
        //memoization of search input 
      const searchProduct = useCallback(() => {
            const search = () => {
              dispatch({ type: SEARCH, payload: query });
            };

         search()
      }, [query]);
    
 
   const contexts={query,setQuery,searchProduct,...state}
    return (
        <SearchInputContext.Provider value={contexts}>
            {children}
        </SearchInputContext.Provider>
    )
}

export default SearchContext
