import React from "react";
import * as buffer from "buffer";

type Accordion = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: Accordion) {
    if(props.collapsed === true){return <div>
        <AccordionTitle title={props.titleValue}/>

    </div>} else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionMenu/>
        </div>
    }

}
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
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