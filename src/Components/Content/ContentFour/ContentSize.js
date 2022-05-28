import React, {useEffect, useState} from 'react';
import image_size from "../../Shared/Images/image_size.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentGlasses from "../ContentThree/ContentGlasses";
import ContentBetweenPage from "../ContentThree/ContentBetweenPage";
import ContentBetweenFour from "./ContentBetweenFour";
import ContentScreens from "../ContentFive/ContentScreens";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";

const ContentSize = (props) => {

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
        props.nextContent(<ContentBetweenFour
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
            let url = props.urlEdit.split("?"),
                formatter = ""
            if(url.length > 1){
                let parser = url[1].split("&")
                parser.pop()
                parser = parser.join("&")
                formatter = url[0] + "?" + parser
            }

            props.setHeader("content")
            backContent(props, <ContentGlasses
                isMan={props.isMan}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={formatter}
                eyeglasses={props.eyeglasses}
            />)
        })
    }, [props])

    return (
        <>
            <p className="widget__content--text">What’s your current <br /> frame size?</p>
            <img src={image_size} alt="image size" className="widget__content--image__size" />
            <ul className="widget__content--list">
                <li
                    className="widget__content--item widget__content--flex__content"
                    onClick={() => {nextContent("68")}}
                >
                    <h3 className="widget__content--heading">Small</h3>
                    <p className="widget__content--text__strong">42-48 mm</p>
                </li>
                <li
                    className="widget__content--item widget__content--flex__content"
                    onClick={() => {nextContent("67")}}
                >
                    <h3 className="widget__content--heading">Medium</h3>
                    <p className="widget__content--text__strong">49-53 mm</p>
                </li>
                <li
                    onClick={() => {nextContent("68")}}
                    className="widget__content--item widget__content--flex__content"
                >
                    <h3 className="widget__content--heading">Large</h3>
                    <p className="widget__content--text__strong">54-58 mm</p>
                </li>
            </ul>
            <p className="widget__skip" onClick={skipContent}>I don’t know</p>

        </>
    );
};

export default ContentSize;
