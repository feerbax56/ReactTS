import React from "react";


function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionMenu/>
    </div>
}

function AccordionTitle() {
    return (<h1>HOHOHO</h1>)
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