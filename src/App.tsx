import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/accordion";
import {Rating} from "./components/rating/Rating";


function App() {
    return (
        <div>
            <div>This is APP component</div>
            <Rating value={4}/>
            <Accordion/>
            <div>module 2</div>
            <Rating value={3}/>
        </div>
    );
}



export default App;
