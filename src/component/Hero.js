import React from 'react';
import '../App.css'

export default function Hero({name,backdrop}){
    return(
        <header className='bg-dark text-white p-5 hero-container'>
            <h1 className='hero-text'>{name}</h1>
            <div className='hero-backdrop' style={{backgroundImage:`url(${backdrop})`}}></div>
           
        </header>
    )
}