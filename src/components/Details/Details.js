import React from 'react';
import './Details.css';

const Details = (props) => {
    const {times}= props
    let totalTime = 0;
    for (const time of times) {

        totalTime = totalTime + time.time
    }
    {
    const buttonText = document.getElementsByClassName('button-text');

    buttonText.forEach((value) => console.log(value))
    }

    return (
        <div>
               <div>
            <div>
            <img src="" alt="" srcset=""/>
            <h4>MD.Nurul Alam Siddiki</h4>
            <p>Chandpur, Bangladesh</p>
            </div>
            <div className='bg-info p-2 rounded'>
                <h5>Height: <small>5.6 inch</small></h5>
                <h5>Age: <small>31</small> years</h5>
            </div>
        </div>
              <div className='m-3'>
                <button className='button-text bg-info bg-opacity-50 rounded-circle m-1 border border-0 p-2'>10 <small>min</small></button>
                <button className='button-text bg-info bg-opacity-50 rounded-circle m-1 border border-0 p-2'>15 <small>min</small></button>
                <button className='button-text bg-info bg-opacity-50 rounded-circle m-1 border border-0 p-2'>20 <small>min</small></button>
                <button className='button-text bg-info bg-opacity-50 rounded-circle m-1 border border-0 p-2'>30 <small>min</small></button>
            </div>
                <div className='bg-info bg-opacity-75 p-2 mt-5'>
                <h5>Exercise Details</h5>
                <p className='bg-dark bg-opacity-50 text-light'> <b>Exercise Time:</b> {totalTime} min</p>
                <p className='bg-dark bg-opacity-50 text-light'> <b>Break Time:</b> 10 min</p>
                <button className='bg-primary text-center border border-0 w-100 p-2'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Details;