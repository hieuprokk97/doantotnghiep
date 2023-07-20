import { createSlice } from '@reduxjs/toolkit'



export const AddressSlice = createSlice({
    name: 'address', 
    initialState: {
        data: []
    },
    reducers: {
        addAddress(state, action){
            state.data.push(action.payload)
        },
        deleteAddress(state, action){
            let newArr = state.data.filter(item=>{
                return item.id !== action.payload;
            });
            state.data = newArr
        },
        updateAddress(state, action) {
            let tempData = state.data; 
            tempData.map(item => {
                if (item.id == action.payload.id){
                    item.sonha = action.payload.sonha;
                    item.duong = action.payload.duong;
                    item.phuong = action.payload.phuong;
                    item.quan = action.payload.quan;
                    item.sdt = action.payload.sdt;
                    item.thanhpho = action.payload.thanhpho;
                    item.checked = action.payload.checked;
                }
            })
            state.data = tempData
        }
    }
});

export const {addAddress, deleteAddress, updateAddress} = AddressSlice.actions

export default AddressSlice.reducer;