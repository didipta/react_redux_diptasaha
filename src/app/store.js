import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../features/Post/postSlice';

const Store= configureStore({
  reducer: {
   post:postSlice
  },
})

export default Store;