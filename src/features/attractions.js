import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attractions:[],
    filtered_attractions:[],
    based:{
      attraction_type:[],
      month:"Select Month",
      rating:"",
      location:"",
      search:""
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
      if (state.based.month === "All" && state.based.attraction_type.length === 0) {
        // Show all attractions if both month and attraction type are set to "All"
        state.filtered_attractions = state.attractions;
      } else {
        // Apply filters based on the selected month and attraction type
        state.filtered_attractions = state.attractions.filter(attraction =>
          (state.based.attraction_type.length === 0 || state.based.attraction_type.includes(attraction.touristAttraction)) &&
          (state.based.location === "" || state.based.location === attraction.district) &&
          (state.based.month === "Select Month" || state.based.month === "All" || state.based.month === attraction.month)
        );
      }
    },
    

    searchForLocation:(state, action) => {
      state.based.search = action.payload
      state.filtered_attractions = state.attractions.filter(attraction => attraction.title.toLowerCase().includes(action.payload.toLowerCase()))
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
    setAttractionMonth: (state, action) => {
      const selectedMonth = action.payload;
      if (selectedMonth === 'All') {
        state.based.month = 'All';
      } else {
        state.based.month = selectedMonth;
      }
    },
    setAttractionRating:(state, action) => {
      state.based.rating = action.payload
    },
  },
})

export const { setAttractions, setAttractionLocation, setAttractionMonth, setAttractionRating, setAttractionType, applyFilters, searchForLocation } = attractionsSlice.actions

export default attractionsSlice.reducer