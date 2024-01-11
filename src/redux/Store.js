/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'

import UserDetailsReducer from './reducers/userDetails.reducer'

export default configureStore({
  reducer: {
    loader: UserDetailsReducer,
  },
  devTools: true,
})