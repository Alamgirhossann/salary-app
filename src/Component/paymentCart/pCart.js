import React from 'react';
import './pCart.css'


const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        total = total + user.salary;  
    }
   
    return (
        <div>
            <div className='payment-cart'>
                <h3>Payment Summery</h3>
                <p>Employee Number:  {cart.length}</p>
                <p>Employee Salary: {total}</p>
                <button className='payment-btn'>Payment</button>
            </div>
        </div>
       

    );
};

export default Cart;