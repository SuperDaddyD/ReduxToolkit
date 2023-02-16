import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import ReservationCard from "./components/ReservationCard";
import { addReservation, removeReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";
//Dope tutorial
//https://www.youtube.com/watch?v=jR4fagDcvrc
function App() {
  const reservations = useSelector(
    (state: RootState) => state.reservation.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] = useState("");

  const handleAddReservations = () => {
    if (!reservationNameInput) {
      return;
    }
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-card-container">
                {reservations.map((name, i) => {
                  return <ReservationCard index={i} key={name} name={name} />;
                })}
              </div>
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
