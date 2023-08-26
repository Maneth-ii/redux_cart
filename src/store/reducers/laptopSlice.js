import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id:1,
        price:150000,
        ram:'4GB',
        cpu:'i3'
    },
    {
        id:2,
        price:300000,
        ram:'16GB',
        cpu:'i5'
    },
    {
        id:3,
        price:200000,
        ram:'8GB',
        cpu:'i5'
    },
    {
        id:4,
        price:375000,
        ram:'32GB',
        cpu:'Rizen 5'
    },
]

const laptopSlice = createSlice({
    name:'cart',
    initialState,

    reducers:{
        addLaptop:(state , action) => {
            state.push(action.payload);
        }
    }
})

export const selectLaptops = ({laptopSlice}) => laptopSlice;
export default laptopSlice.reducer;
export const {addLaptop} = laptopSlice.actions;