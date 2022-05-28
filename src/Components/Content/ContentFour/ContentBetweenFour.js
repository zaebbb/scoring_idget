import React, {useEffect, useState} from 'react';
import image_page from "../../Shared/Images/image_page.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentGlasses from "../ContentThree/ContentGlasses";
import ContentAlternative from "./ContentAlternative";
import ContentSize from "./ContentSize";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";

const ContentBetweenFour = (props) => {

    setTimeout(() => {
        props.nextContent(<ContentAlternative
            eyeglasses={props.eyeglasses}
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
            isMan={props.isMan}
            setHeader={props.setHeader}
        />)
    }, 2000)

    useEffect(() => {
        let btnClose = document.querySelector(".widget__header--btn__close")
        btnClose.addEventListener("click", () => {
            exitContent(props)
        })
    }, [props])

    return (
        <>
            <img src={image_page} alt="image page" className="widget__content--image__page" />
            <h3 className="widget__content--text__page">No worries, we’ve got you!</h3>
        </>
    );
};

export default ContentBetweenFour;
