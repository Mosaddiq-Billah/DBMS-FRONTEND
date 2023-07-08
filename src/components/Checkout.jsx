import {React, useState} from 'react'
import { useSelector } from 'react-redux';
import OrderNowForm from './orderform';


const Checkout = () => {
    const state = useSelector((state) => state.addItem);
    const [showForm, setShowForm]=useState(false);

    

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }    
    const handleShowForm=()=>{
        setShowForm(true);
    }

    return (
        <div className="container py-18">
          <ul className="list-group mb-3">
            {state.map(itemList)}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>
    
          {!showForm && (
            <button className="btn btn-primary" onClick={handleShowForm}>
              Order Now
            </button>
          )}
          {showForm && <OrderNowForm itemTitle={state.map((item)=>item.title).join(",")} />}
        </div>
      );
    };
    
    export default Checkout;;


