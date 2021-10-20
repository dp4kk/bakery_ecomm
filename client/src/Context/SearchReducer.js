import Fuse from 'fuse.js'


export const SearchReducer=(state,action)=>{ 

    switch(action.type){
        case 'SEARCH':{
            if(state.data ){
                const fuse= new Fuse(state.data,{shouldSort:true,minMatchCharLength:1,includeScore:true,keys:['name']})
                let results=fuse.search(action.payload)
                    
                let ItemSearch=action.payload ? results.map(result=>result.item) : state.data
               
                return {
                    data:ItemSearch
                }
            }
            else return
        }
        
        default:{
            return state
        }
    }
}