import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'database',
  initialState: {
    data: {}
  },
  reducers: {
    userUpdate: (state, action) =>{
        state.data = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { userUpdate } = counterSlice.actions

export default counterSlice.reducer
