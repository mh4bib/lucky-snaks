import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div className='qna'>
            <div className='qna1'>
                <h2>How react works</h2>
                <p>React is a JavaScript-based UI development library
                React just maintains a tree. To perform rendering effectively, 
                react create a virtual DOM. This is just a representation of a DOM, 
                but its lightweight and detached from the browser. 
                Its easier to think of virtual dom as a blueprint for the real thing.React follows a unidirectional data flow.</p>
            </div>
            <div className='qna2'>
                <h2>Differences between props and states</h2>
                <p>
                    <h3>Props</h3>
                    <span>1. The Data is passed from oneThe Data is passed within  the component only.</span> <br />
                    <span>2. It is immutable (can not be modified).</span> <br />
                    <span>3. props can be use with state and functional component</span> <br />
                </p>
                <p>
                    <h3>states</h3>
                    <span>1. The data is passed within the component only</span><br />
                    <span>2. State is mutable</span><br />
                    <span>3. state can be used within the component only</span><br />
                </p>
            </div>
        </div>
    );
};

export default Qna;