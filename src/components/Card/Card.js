import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name,img,time,text} = props.card;
    const {addToListHandler} =props
    
    return (
        
        
        <div className="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">Time Required:{time}</p>
                <button onClick={()=>addToListHandler(props.card)} className="btn btn-primary">Add to list</button>
            </div>
            </div>
        
    );
};

export default Card;