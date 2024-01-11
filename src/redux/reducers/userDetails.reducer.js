/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    userDetails: {
      full_name: false,
      login: false,
      email: false,
      role: "",
      user_coins:[]
    },

  },
  reducers: {
    updateUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    updateUserCoins(state, action) {
      state.userDetails.user_coins[0].coin = action.payload;
    }
  },
});

export const { updateUserDetails, updateUserCoins } = UserDetailsSlice.actions;

export const userDetails = state => state.loader.userDetails;


export default UserDetailsSlice.reducer;
