import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/accordion";
import {Rating} from "./components/rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <Rating value={4}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            <div>module 2</div>
            <Rating value={3}/>
        </div>
    );
}

type PageTytlePropsType = {
    title: string
}

function PageTitle(props: PageTytlePropsType) {
    return (
        <div>{props.title}</div>
    )
}


export default App;
