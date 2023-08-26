import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    
    reducers:{
        addItem:{
            reducer:(state, action) => {
                state.push(action.payload);
            },
            prepare:(id ,price, ram , cpu) =>({
                payload:{
                    id,
                    price,
                    ram,
                    cpu
                }
            })
                
            
        }
    }
})

export const selectCart = ({cartSlice}) => cartSlice
export default cartSlice.reducer;
export const {addItem} = cartSlice.actions; 
