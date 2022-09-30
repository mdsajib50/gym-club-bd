import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <div>
            <h4>How does react work?</h4>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
            <h4>Props and State difference?</h4>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
            <h4>What does a useEffect do?</h4>
            <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Question;