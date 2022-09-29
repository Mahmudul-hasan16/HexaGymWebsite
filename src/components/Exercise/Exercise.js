import React, { useState } from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const exercise = [10, 20, 30, 40, 50];
    const [breaktime, setBreaktime] = useState(0);
    const activity = (exer) => {
        setBreaktime(exer);
    }
    return (
        <div>
            <div className='profile-details'>
                <div className='profile-pic'>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png" alt="" />
                </div>
                <div>
                    <h3>Md Mahmudul Hasan</h3>
                    <p>Junior Web Developer</p>
                </div>
            </div>
            <div className='details'>
                <div>
                    <h2>75 <span><small>kg</small></span></h2>
                    <h5>Weight</h5>
                </div>
                <div>
                    <h2>6.5</h2>
                    <h5>Height</h5>
                </div>
                <div>
                    <h2>25 <span><small>yrs</small></span></h2>
                    <h5>Age</h5>
                </div>
            </div>

            <div className='break-container'>
                <h2>Add Break</h2>
                <div className='break-btn'>
                    {/* <button>10</button>
                    <button>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button> */}
                    {
                        exercise.map(exer => <button onClick={() => activity(exer)}>{exer}</button>)
                    }
                </div>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details:</h2>
                <div>
                    <h3>Exercise Time: 0 hrs</h3>
                </div>
                <div>
                    <h3>Break Time: {breaktime} hrs</h3>
                </div>
            </div>

            <div className='activity-completed'>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Exercise;