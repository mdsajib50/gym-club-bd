import React, { useState } from 'react';
import Break from '../Break/Break';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Details = (props) => {
    const notify =()=>{
        toast('WoW Activity Completed',
           {position: toast.POSITION.TOP_CENTER})
    }
    const {times}= props
    let totalTime = 0;
    for (const time of times) {

        totalTime = totalTime + time.time
    }
    const [breakTime, setBreakTime]= useState([])

    const handelBreakTime = (breakTime)=>{
        const timeArr= [breakTime];
        const newTime= [...timeArr,breakTime]
        console.log(newTime);
        localStorage.setItem('value','newTime')
        setBreakTime(breakTime)}
         
    

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
                  <h5>Add A Break</h5>
                <div className='d-flex'>
                <Break breakTime={10} handelBreakTime={handelBreakTime}></Break>
                <Break breakTime={20} handelBreakTime={handelBreakTime}></Break>
                <Break breakTime={30} handelBreakTime={handelBreakTime}></Break>
                <Break breakTime={40} handelBreakTime={handelBreakTime}></Break>
                </div>
                
            </div>
                <div className='bg-info bg-opacity-75 p-2 mt-5'>
                <h5>Exercise Details</h5>
                <p className='bg-dark bg-opacity-50 text-light'> <b>Exercise Time:</b> {totalTime} min</p>
                <p className='bg-dark bg-opacity-50 text-light'> <b>Break Time:</b> {breakTime} min</p>
                <button onClick={notify} className='bg-primary text-center border border-0 w-100 p-2'>Activity Completed</button>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Details;