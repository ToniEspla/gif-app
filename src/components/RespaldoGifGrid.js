//import React, { useState, useEffect } from 'react';
//import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
//import { useFetchGifs } from '../hooks/useFetchGifs';
//import '../css/GifGrid.css';

//const GifGrid = ({ category }) => {
//    //const [images, setImages] = useState([]);
//    const state = useFetchGifs();
//    console.log(state);

//    /*
//    //useEffect(() => {
//    //    getGifs(category).then(
//    //        imgs => setImages(imgs)
//    //    );
//    //},[]);

//    //const getGifs = async() => {
//    //    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UHEfVzzTXx7XYFkbFO5O2O9QG2lscHVh`;
//    //    const resp = await fetch(url);
//    //    const { data } = await resp.json();

//    //    const gifs = data.map(img => {
//    //        return {
//    //            id: img.id,
//    //            title: img.title,
//    //            image: img.images?.downsized_medium.url
//    //            };

//    //    });
//    //    console.log(gifs);
//    //    setImages(gifs);
//    //};
//    */
//    return (
//        <div>
//            <h3>{category}</h3>
//            <div className='grid-contenedor'>
//                {images.map((item) => {
//                    return (
//                        <GifGridItem key={item.id} item={item} />
//                    );
//                })}
//            </div>
//        </div>
//    );
//};

//export default GifGrid;