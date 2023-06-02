import { configureStore } from "@reduxjs/toolkit";
import heitSlice from "./heitSlice";

export default configureStore({
   reducer: {
      heit:heitSlice
   }
   

});