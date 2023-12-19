import { configureStore, createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    filters: {
      homeType: [],
      priceRange: [],
      bedrooms: [],
      area: [],
      furnished: ''
    },
    filterToggle: false,
  },
  reducers: {
    setProducts(state, action){
      state.items = action.payload;
    },
    addHomeFilter(state, action){
      state.filters.homeType = [...state.filters.homeType, action.payload];
    },
    deleteHomeFilter(state, action){
      state.filters.homeType = state.filters.homeType.filter(function(item) {
        return item !== action.payload});
    },
    addBedroomsFilter(state, action){
      state.filters.bedrooms = [...state.filters.bedrooms, action.payload];
    },
    deleteBedroomsFilter(state, action){
      state.filters.bedrooms = state.filters.bedrooms.filter(function(item) {
        return item !== action.payload});
    },
    addPriceRangeFilter(state, action){
      state.filters.priceRange = action.payload;
    },
    addAreaRangeFilter(state, action){
      state.filters.area = action.payload;
    },
    addFurnishedFilter(state, action){
      state.filters.furnished = action.payload;
    },
    toggle(state, action){
      state.filterToggle = action.payload;
    }
  }
  });

  export const store = configureStore({
    reducer: { products: productSlice.reducer}
  })

  export const productActions = productSlice.actions;