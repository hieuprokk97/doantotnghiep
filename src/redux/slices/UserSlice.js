import { createSlice, } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {
    userState(state, action) {
      const userState = state.data.find((user) => user == action.payload);
      if (userState) {
        emptyState
      }else{ 
        state.data.push({ ...action.payload})
      }
    },
    emptyState(state, action) {
      state.data = []
    }
  },
});
export const { userState, emptyState } = UserSlice.actions;
export default UserSlice.reducer;