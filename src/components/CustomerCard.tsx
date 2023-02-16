import {useDispatch} from "react-redux"
import {useState} from "react";
import { addFoodToCustomer} from "../features/customersSlice"

interface CustomerCardTypes{
    id:string,
    name:string,
    food:string[]
}

export default function CustomerCard({id,name,food}:CustomerCardTypes) {
    const dispatch = useDispatch()
    const [customerFoodInput, setCustomerFoodInput] = useState("")
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
            {food.map((foo)=>{
                return <p>{foo}</p>
            })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={(e)=>setCustomerFoodInput(e.target.value)}  />
          <button onClick={()=>{
            dispatch(addFoodToCustomer({
                id,
                food:customerFoodInput
              }))
              setCustomerFoodInput("")
          }}  >Add</button>
        </div>
      </div>
    </div>
  );
}

