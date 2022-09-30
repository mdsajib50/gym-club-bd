import React, { useState } from 'react';
import './Break.css'

const Break = (props) => {
    const {breakTime,handelBreakTime} = props
   
    return (
        <div>
            
                <button onClick={()=>handelBreakTime(breakTime)} className='button-text bg-info bg-opacity-50 rounded-circle m-1 border border-0 p-2'>{breakTime}<small>min</small></button>
        </div>
    );
};

export default Break;