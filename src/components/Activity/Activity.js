import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import List from '../List/List';
import './Activity.css'

const Activity = () => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const handleClickedToTheBtn = (timezone) => {
        const newTime = [...time, timezone];
        setTime(newTime);
    }

    return (
        <div className='activity-container'>
            <div className="list-container">
                {
                    data.map(list => <List
                        key={list.id}
                        list={list}
                        handleAddToClickList={handleClickedToTheBtn}
                    ></List>)
                }

            </div>
            <div className="details-container">
                <Exercise
                    exerciseTime={time}
                ></Exercise>
            </div>
        </div>
    );
};

export default Activity;