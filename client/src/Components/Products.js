import { Grid, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import {SearchInputContext} from '../Context/SearchContext'

const useStyles=makeStyles(theme=>({
    card:{
        paddingLeft:'40px',
    }
}))
const Products = () => {
    const {data,searchProduct}=useContext(SearchInputContext)
   
    useEffect(()=>{
        searchProduct()
    },[searchProduct])
    const classes=useStyles()
    return (
        <div>
        
          <Grid container  className={classes.card} >
         
               {data.map((item)=>{
                    return (
                        <ProductCard key={item.id} item={item}/>
                    )
                   })}
          </Grid>  
        </div>
    )
}

export default Products
