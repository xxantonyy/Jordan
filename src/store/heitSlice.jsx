import { createSlice } from "@reduxjs/toolkit"

const HeitSlice = createSlice(
   {
      name: "heitSlice",
      initialState: {
         sectionHeight: 1200,
         data: [],
      },
      reducers:{
         setHiet(state,action){
            state.sectionHeight = action.payload.height;
         },
      },
   }
)

export const { setHiet } = HeitSlice.actions;
export default HeitSlice.reducer;
