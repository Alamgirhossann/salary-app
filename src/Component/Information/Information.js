import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import './Information.css'
const Information = (props) => {
  const {img, name, blood_group, address, email, phone, website, salary} = props.users;
    return (
        <div className='user-info'>
            <div className='image'>
                <img src={img} alt=""/>
            </div>
            <div className='text-info'>
                <h3>Name: {name}</h3>
                <p>Blood Group: {blood_group}</p>
                <p>Address: {address}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <h3>Salary: {salary}</h3>
                <button className='user-btn' 
                onClick ={ () => props.handlePayCart(props.users)}>
                    <FontAwesomeIcon icon={faUserPlus} 
                /> Add Now</button>

            </div>
        </div>
    );
};

export default Information;