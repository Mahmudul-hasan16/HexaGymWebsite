import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
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
            <h2>Excersise time : </h2>
        </div>
    );
};

export default Exercise;