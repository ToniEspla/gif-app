import React from 'react';

const GifGridItem = ({ item }) => {
    return (
        <>
            <div className='card animate__animated animate__fadeIn'>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title}/>
            </div>
        </>
        );
};

export default GifGridItem;