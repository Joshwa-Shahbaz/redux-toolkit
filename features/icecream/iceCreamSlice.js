const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfIceCream: 40,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

module.exports = {
  reducer: iceCreamSlice.reducer,
  actions: iceCreamSlice.actions,
};
