import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";
import infoReducer from "./slices/infoSlice"; 


const store = configureStore({
  reducer: {
    flights: flightReducer,
    info: infoReducer,  

  },
});


export default store;
