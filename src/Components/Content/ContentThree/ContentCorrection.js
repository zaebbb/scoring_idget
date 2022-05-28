import React, {useEffect, useState} from 'react';
import image_page from "../../Shared/Images/image_page.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentTwoMan from "../ContentTwo/ContentTwoMan";
import ContentGlasses from "./ContentGlasses";
import ContentSize from "../ContentFour/ContentSize";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentBetweenPage from "./ContentBetweenPage";

const ContentCorrection = (props) => {

    contentHeader("3", false)

    function nextContent(){
        props.nextContent(<ContentGlasses
            eyeglasses={props.eyeglasses}
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
            isMan={props.isMan}
            setHeader={props.setHeader}
        />)
    }

    function skipContent(){
        props.nextContent(<ContentSize
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
            backContent(props, props.isMan ? <ContentBetweenPage
                isMan={props.isMan}
                eyeglasses={props.eyeglasses}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={props.urlEdit}
            /> : <ContentBetweenPage
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
            <p className="widget__content--text">Do you need vision correction?</p>
            <ul className="widget__content--list">
                <li className="widget__content--item" onClick={() => {nextContent()}}>
                    <h3 className="widget__content--heading">Yes</h3>
                </li>
                <li className="widget__content--item" onClick={() => {skipContent()}}>
                    <h3 className="widget__content--heading">No</h3>
                </li>
            </ul>
            <p className="widget__skip" onClick={() => {skipContent()}}>Skip</p>
        </>
    );
};

export default ContentCorrection;
