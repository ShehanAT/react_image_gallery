import React from 'react';
import Gif from './Gif';
import PropType from 'prop-types';

const GifList = props => {


    return (
        <ul className="gif-list">
           {props.photo}
        </ul>
    )
}
GifList.PropType = {
    photo : PropType.array.isRequired,
}

export default GifList;