import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import List from '../List/List';
import './Activity.css'

const Activity = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    // const handleAddToListClick = (list) =>{
    //     // console.log(list);
    //     const newList = [...exercise , list];
    //     setList(newList);
    // }

    return (
        <div className='activity-container'>
            <div className="list-container">
                {
                    data.map(list => <List
                        key={list.id}
                        list={list}
                    // handleAddToListClick={handleAddToListClick}
                    ></List>)
                }

            </div>
            <div className="details-container">
                <Exercise></Exercise>
            </div>
        </div>
    );
};

export default Activity;