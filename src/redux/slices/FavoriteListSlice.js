import { createSlice } from "@reduxjs/toolkit";

const FavoriteListSlice = createSlice({
    name: 'favoritelist', 
    initialState: {
        data: [],
    },
    reducers: {
        addItemToFavoriteList(state, action){ 
            let tempData = state.data;
            tempData.push(action.payload);
            state.data = tempData; 
        }
    }
    
})
export const {addItemToFavoriteList} = FavoriteListSlice.actions; 
export default FavoriteListSlice.reducer;