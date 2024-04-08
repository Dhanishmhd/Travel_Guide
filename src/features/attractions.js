import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attractions:[],
    filtered_attractions:[],
    based:{
      attraction_type:[],
      month:"Select Month",
      rating:[],
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
          // Apply filters based on the selected month, attraction type, and rating
          state.filtered_attractions = state.attractions.filter(attraction => {
            return (
              // Check if attraction type and location filters match
              (state.based.attraction_type.length === 0 || state.based.attraction_type.includes(attraction.touristAttraction)) &&
              (state.based.location === "" || state.based.location === attraction.district) &&
              // Check if month filter matches
              (state.based.month === "Select Month" || state.based.month === "All" || state.based.month === attraction.month) &&
              // Check if rating filter matches
              (state.based.rating.length === 0 || state.based.rating.includes(attraction.rating))
            );
          });
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

    setAttractionRating: (state, action) => {
      const selectedRating = action.payload;
      const index = state.based.rating.indexOf(selectedRating);
      
      if (index === -1) {
        // If the selected rating is not already in the array, add it
        state.based.rating.push(action.payload);
      } else {
        // If the selected rating is already in the array, remove it
        state.based.rating = state.based.rating.filter((item) => item !== action.payload);
      }
      
      console.log('Selected Ratings:', state.based.rating);
    },
    
  },
})

export const { setAttractions, setAttractionLocation, setAttractionMonth, setAttractionRating, setAttractionType, applyFilters, searchForLocation } = attractionsSlice.actions

export default attractionsSlice.reducer