import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attractions:[],
    filtered_attractions:[],
    based:{
      attraction_type:[],
      month:"Select Month",
      rating:"",
      location:""
    }
}

export const attractionsSlice = createSlice({
  name: 'attractions',
  initialState,
  reducers: {
    setAttractions:(state, action) => {
      state.attractions = action.payload
      state.filtered_attractions = action.payload
    },

    applyFilters: (state) => {
      state.filtered_attractions = state.attractions.filter(attraction =>
        (state.based.attraction_type.length === 0 || state.based.attraction_type.includes(attraction.touristAttraction)) &&
        (state.based.month === "Select Month" || state.based.month === attraction.month)
      );
    },

    setAttractionType: (state, action) => {
      const index = state.based.attraction_type.indexOf(action.payload);
      if (index === -1) {
        state.based.attraction_type.push(action.payload);
      } else {
        state.based.attraction_type = state.based.attraction_type.filter((item) => item !== action.payload);
      }
    },
    
    setAttractionLocation:(state, action) => {
      state.based.location = action.payload
    },
    setAttractionMonth:(state, action) => {
      state.based.month = action.payload
    },
    setAttractionRating:(state, action) => {
      state.based.rating = action.payload
    },
  },
})

export const { setAttractions, setAttractionLocation, setAttractionMonth, setAttractionRating, setAttractionType, applyFilters } = attractionsSlice.actions

export default attractionsSlice.reducer