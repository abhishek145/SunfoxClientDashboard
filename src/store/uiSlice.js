import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dashboard: true,
  ecgTest: false,
  reports: false,
  billing: false,
  ecgtestdata: false,
  carddata: false,
  search: null,
  searchResults: [],
};
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeView(state, action) {
      const { viewName, deviceid, data } = action.payload;
      Object.keys(state).forEach(view => {
        state[view] = false;
      });
      state[viewName] = true;
      state.deviceid = deviceid;
      state.data = data;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { changeView, setSearch, setSearchResults } = uiSlice.actions;

export default uiSlice.reducer;
