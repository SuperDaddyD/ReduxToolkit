import {createSlice,PayloadAction} from "@reduxjs/toolkit";

//Array of objects
interface CustomerState{
    value:Customer[],

}

//Individual objects
interface Customer{
    id:string,
    name:string,
    food:string[]
}
interface addFoodToCustomerPayLoadType{
    id:string,
    food:string
}
//The actual initial state
const initialState:CustomerState = {
    value:[]
}

const customerSlice = createSlice({
    name:"customers",
    initialState,
    reducers:{
       addCustomers:(state,action:PayloadAction<Customer>)=>{
          state.value.push(action.payload)
       },
       addFoodToCustomer:(state,action:PayloadAction<addFoodToCustomerPayLoadType>)=>{
         state.value.forEach((customer)=>{
            if(customer.id == action.payload.id){
                customer.food.push(action.payload.food)
            }
         }
         )
       }

    }
})


export const {addCustomers,  addFoodToCustomer} = customerSlice.actions;

export default customerSlice.reducer;