import React, {useEffect, useState} from 'react';
import image_page from "../../Shared/Images/image_page.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentSize from "../ContentFour/ContentSize";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentBetweenPage from "./ContentBetweenPage";
import ContentCorrection from "./ContentCorrection";

const ContentGlasses = (props) => {

    contentHeader("3", false)

    function skipContent(){
        props.nextContent(<ContentSize
            eyeglasses={props.eyeglasses}
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
            isMan={props.isMan}
            setHeader={props.setHeader}
        />)
    }

    function nextContent(valueImage){
        let url = props.urlEdit + `&lenstype=${valueImage}`

        props.nextContent(<ContentSize
            eyeglasses={props.eyeglasses}
            urlEdit={url}
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
            backContent(props, <ContentCorrection
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
            <p className="widget__content--text">What do you need your glasses for?</p>
            <ul className="widget__content--list">
                <li className="widget__content--item widget__item--short" onClick={() => nextContent("6")}>
                    <h3 className="widget__content--heading">Near Vision</h3>
                </li>
                <li className="widget__content--item widget__item--short">
                    <h3 className="widget__content--heading" onClick={() => nextContent("6")}>Distance Vision</h3>
                </li>
                <li className="widget__content--item widget__item--short">
                    <h3 className="widget__content--heading" onClick={() => nextContent("7")}>Multifocal / Progressive</h3>
                </li>
            </ul>
            <p className="widget__skip" onClick={() => {skipContent()}}>Skip</p>
        </>
    );
};

export default ContentGlasses;
