import {configureStore} from "@reduxjs/toolkit" 

//EXPORTING THE STATE IT'S SELF!!!
export const store = configureStore({
    reducer:{

    }
})


//EXPORTING THE STATE TYPE!!!
export type RootState = ReturnType <typeof store.getState>;

//EXPORTING THE DISPATCH TYPE!!!
export type AppDispatch = typeof store.dispatch;