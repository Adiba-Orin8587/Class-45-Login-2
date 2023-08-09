/* eslint-disable no-unused-vars */
import React from 'react';
import './Loader.css'
import loader from '../../../assets/loader.gif'

const Loader = () => {
    return (
        <div className='img my-5 py-5 mx-auto '>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loader;