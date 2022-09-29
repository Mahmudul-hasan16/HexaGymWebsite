import React from 'react';
import './List.css'


const List = ({ list, handleAddToClickList }) => {

    const { img, name, time } = list;

    return (
        <div className='list'>
            <img src={img} alt="" ></img>
            <div className='list-info'>
                <h4 className='list-name'>{name}</h4>
                <h2 className='list-time'>Time required : {time} hours</h2>

            </div>
            <button onClick={() => handleAddToClickList(list)} className='btn-add'>
                <p>Add to list</p>
            </button>

        </div>
    );
};

export default List;