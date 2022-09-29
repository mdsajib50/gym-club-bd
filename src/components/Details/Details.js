import React from 'react';

const Details = () => {
    return (
        <div className='bg-info bg-opacity-75 p-2 mt-5'>
            <h5>Exercise Details</h5>
            <p className='bg-dark bg-opacity-50 text-light'> <b>Exercise Time:</b> 20 min</p>
            <p className='bg-dark bg-opacity-50 text-light'> <b>Break Time:</b> 10 min</p>
            <button className='bg-primary text-center border border-0 w-100 p-2'>Activity Completed</button>
        </div>
    );
};

export default Details;