import React, {useEffect, useState} from 'react';
import image_page from "../../Shared/Images/image_page.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentTwoMan from "../ContentTwo/ContentTwoMan";
import ContentCorrection from "./ContentCorrection";
import ContentSize from "../ContentFour/ContentSize";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";

const ContentBetweenPage = (props) => {

    contentHeader("3", false)

    setTimeout(() => {
        props.nextContent(<ContentCorrection
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
            <h3 className="widget__content--text__page">Let's get to know you!</h3>
        </>
    );
};

export default ContentBetweenPage;
