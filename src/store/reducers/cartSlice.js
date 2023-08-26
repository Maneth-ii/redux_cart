import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    
    reducers:{
        addItem:{
            reducer:(state, action) => {
                const id = action.payload.id;
                const tempObject = state.find((ele) =>{
                    return ele.id === id;
                })

                if(tempObject){
                    tempObject.count += 1;
                }
                else{
                    state.push(action.payload);
                }

            },
            prepare:(id ,price, ram , cpu) =>({
                payload:{
                    count:1,
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
