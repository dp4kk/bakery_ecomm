const Storage=(cartItems)=>{
    localStorage.setItem('cart',JSON.stringify(cartItems.length>0 ? cartItems:[]))
}

export const sumItems=(cartItems)=>{
    Storage(cartItems)
    let totalCount=cartItems.reduce((total,item)=>total+item.quantity,0)
    let totalAmount=cartItems.reduce((total,item)=>total+item.quantity*item.price,0)
        return {totalAmount,totalCount}

}

export const CartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
            if(!state.cartItems.find(item=>item.id===action.payload.id)){
                state.cartItems.push({...action.payload,quantity:1})
            }
            return{
                ...state,
                ...sumItems(state.cartItems),
                cartItems:[...state.cartItems]
            }
        }
        case 'REMOVE_ITEM':{
            return{
                ...state,
                ...sumItems(state.cartItems.filter(item=>item.id!==action.payload.id)),
                cartItems:[...state.cartItems.filter(item=>item.id!==action.payload.id)]
            }
        }
        case 'INCREASE':{
            state.cartItems[state.cartItems.findIndex(item=>item.id===action.payload.id)].quantity++
            return{
                ...state,
                ...sumItems(state.cartItems),
                cartItems:[...state.cartItems]
            }
        }
        case 'DECREASE':{
              
            state.cartItems[state.cartItems.findIndex(item=>item.id===action.payload.id)].quantity--
            return{
                ...state,
                ...sumItems(state.cartItems),
                cartItems:[...state.cartItems]
            }
        }
        case 'CLEAR_CART':{
            return{
                ...sumItems([]),
                cartItems:[]
            }
        }
        case 'CHECKOUT':{
            return{
                ...sumItems([]),
                cartItems:[],
                checkout:true
            }
        }
         default:{
             return state
         }
    }

}