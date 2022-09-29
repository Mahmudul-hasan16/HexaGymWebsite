import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>------Question Answer------</h1><br />
            <div>
                <h2>1. How does React work?</h2>
                <p>React is a javaScript library. React component work similarly to javaScript function. React code called JSX. If we write a react code, babel converted/compile the code to ECMAScript. Then the code is work. Another most effective benified is the whole website are devided by react component that's why if we need a simple change in the website then we simply change the pusrticular component it's never effect the other component or element</p>
            </div><br />
            <div>
                <h2>2. Differences between react props and state?</h2>
                <p>props: Mostly props at react to pass data from one component to another component. If we want to give any other name it's will be work well but most developer use it. State: State is a local data storage that is local to the component only and cannot be passed to other component.</p>
            </div><br />
            <div>
                <h2>3. What is the other way to use useEffect without fetch data loading?</h2>
                <p>If we use a function in the useEffect then we need to reload particular function with any particular action then we can use useEffect, Like if we set any changes activity in useEffect dipendency then the useEffect will reload the the function the with the dipendency. We set any data to the useState form the useEffect after that we use the data outside of the useEffect.</p>
            </div>

        </div>
    );
};

export default Question;