import React, { useEffect, useState } from 'react';
import './Cards.css';
import Break from '../Break/Break';
import Card from '../Card/Card';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
       
            <div className ='container'>
           
                <div className='card-container'>
                {
            cards.map(card => <Card key={card.id} card={card}></Card>)

        },
                </div>
                <div className='details-container'>
                <Profile></Profile>
                <Break></Break>
                <Details></Details>
                </div>
            </div>
       
    );
};

export default Cards;