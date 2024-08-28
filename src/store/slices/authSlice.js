import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userData:{}
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   logout:((state)=>{

   })
  },
  extraReducers: builder =>{

  }
});
export const { logout} = userSlice.actions
export default userSlice.reducer;
