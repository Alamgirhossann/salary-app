import React, { useState } from 'react';
import duplicateData from '../../duplicateData/User';
import './User.css';
import Information from '../Information/Information';
import Cart from '../paymentCart/pCart';

const User = () => {
    const allData = duplicateData.slice(0,15);
    const [user, setUser] = useState(allData);
    const [cart, setCart] = useState([]);

    const handlePayCart = (users) =>{
        const newPayCart = [...cart, users];
        setCart(newPayCart);
    }

    return (
        <div className='user-container'>
            <div className='employee-container'>
                {user.map(user => <Information handlePayCart ={handlePayCart} 
                users={user}></Information>)}
            </div>

            <div className='cart-container'>
                <div className ='paymentCart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default User;