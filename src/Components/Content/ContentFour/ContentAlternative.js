import React, {useEffect, useState} from 'react';
import image_size from "../../Shared/Images/image_size.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentGlasses from "../ContentThree/ContentGlasses";
import ContentBetweenPage from "../ContentThree/ContentBetweenPage";
import ContentScreens from "../ContentFive/ContentScreens";
import ContentSize from "./ContentSize";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentCorrection from "../ContentThree/ContentCorrection";
import ContentBetweenFour from "./ContentBetweenFour";

const ContentAlternative = (props) => {

    contentHeader("4", false)

    function nextContent(valueImage){
        let url = props.urlEdit + `&frame_size=${valueImage}`
        props.nextContent(<ContentScreens
            eyeglasses={props.eyeglasses}
            urlEdit={url}
            nextContent={props.nextContent}
            isMan={props.isMan}
            setHeader={props.setHeader}
        />)
    }

    function skipContent(){
        props.nextContent(<ContentScreens
            eyeglasses={props.eyeglasses}
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
            isMan={props.isMan}
            setHeader={props.setHeader}
        />)
    }

    useEffect(() => {
        let btnClose = document.querySelector(".widget__header--btn__close")
        btnClose.addEventListener("click", () => {
            exitContent(props)
        })

        let btnBack = document.querySelector(".widget__header--btn__back")
        btnBack.addEventListener("click", () => {
            props.setHeader("content")
            backContent(props, <ContentBetweenFour
                isMan={props.isMan}
                eyeglasses={props.eyeglasses}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={props.urlEdit}
            />)
        })
    }, [props])

    return (
        <>
            <p className="widget__content--text">How wide would you <br /> say your face is?</p>
            <ul className="widget__content--list">
                <li className="widget__content--item widget__item--short" onClick={() => {nextContent("66")}}>
                    <h3 className="widget__content--heading">Wider Than Average</h3>
                </li>
                <li className="widget__content--item widget__item--short" onClick={() => {nextContent("67")}}>
                    <h3 className="widget__content--heading">Average</h3>
                </li>
                <li className="widget__content--item widget__item--short" onClick={() => {nextContent("68")}}>
                    <h3 className="widget__content--heading">Narrower Than Average</h3>
                </li>
            </ul>
            <p className="widget__skip" onClick={() => {skipContent()}}>I’m not sure</p>
        </>
    );
};

export default ContentAlternative;
