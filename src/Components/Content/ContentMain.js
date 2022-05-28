import React, {useEffect, useState} from 'react';
import ContentStart from "./ContentStart";

const MainContent = (props) => {

    let setHeader = props.setHeader

    let widgetURL = "https://example.com/?"

    useEffect(() => {
    }, [])

    const [content, setContent] = useState(<ContentStart urlEdit={widgetURL} nextContent={""} setHeader={setHeader} />)
    const [exitPage, setExitPage] = useState(props.contentExit)

    useEffect(() => {
        setContent(<ContentStart urlEdit={widgetURL} nextContent={setContent} setHeader={setHeader} />)

        let url = document.getElementById("glasses-quiz-widget")
        widgetURL = url.getAttribute("data-source") + "?"
    }, []);

    if(exitPage){
        setContent(<ContentStart nextContent={setContent} setHeader={setHeader} urlEdit={widgetURL} />)

        return (
            <>
                { content }
            </>
        )
    } else {
        return (
            <>
                { content }
            </>
        )
    }

};

export default MainContent;
