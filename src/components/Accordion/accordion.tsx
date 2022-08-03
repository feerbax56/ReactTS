import React from "react";


function Accordion(props: any) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionMenu/>
    </div>
}

function AccordionTitle(props: any) {
    return (<h1>{props.title}</h1>)
}

function AccordionMenu() {
    return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}


export default Accordion;