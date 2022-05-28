import ContentStart from "../Content/ContentStart";
import React from "react";

function exitContent(props){
    let url = document.getElementById("glasses-quiz-widget")
    let urlClear = url.getAttribute("data-source") + "?"

    props.setHeader("start")
    props.nextContent(<ContentStart
        urlEdit={urlClear}
        nextContent={props.nextContent}
        setHeader={props.setHeader}
    />)
}

export default exitContent