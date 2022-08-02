import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/accordion";
import {Rating} from "./components/rating/Rating";


function App() {
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}



export default App;
