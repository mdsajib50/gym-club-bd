import React, { useEffect, useState } from 'react';
import './Cards.css';

import Card from '../Card/Card';

import Details from '../Details/Details';

const Cards = () => {
    const [cards, setCards] = useState([])

    const [times, setTime]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    const addToListHandler = (card)=>{
        console.log(card)
        const newCard =[...times,card]
        setTime(newCard)
    }
    console.log(times)
    return (
       
            <div className ='container'>
           
                <div className='card-container'>
                {
            cards.map(card => <Card key={card.id} card={card} addToListHandler={addToListHandler}></Card>)

        },
                </div>
                <div className='details-container'>
        
                <Details times={times}></Details>
                </div>
            </div>
       
    );
};

export default Cards;