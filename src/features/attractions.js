import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attractions:[]
}

export const attractionsSlice = createSlice({
  name: 'attractions',
  initialState,
  reducers: {
    setAttractions:(state, action) => {
      console.log(action.payload)
      state.attractions = action.payload
    }
  },
})

export const { setAttractions } = attractionsSlice.actions

export default attractionsSlice.reducer