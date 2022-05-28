import React, {useEffect, useState} from 'react';
import contentHeader from "../../Functions/ContentHeader";
import ContentGlassSlider from "../ContentEut/ContentGlassSlider";
import ContentFinal from "../ContentFinal/ContentFinal";
import ContentBrandSlider from "../ContentTan/ContentBrandSlider";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentCorrection from "../ContentThree/ContentCorrection";

const ContentNine = (props) => {

    contentHeader("9", false)

    function nextContent(){
        props.nextContent(<ContentBrandSlider
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
        />)
    }

    function finalContent(){

        props.setHeader("final")
        props.nextContent(<ContentFinal
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
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
            backContent(props, <ContentBrandSlider
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={props.urlEdit}
            />)
        })
    }, [props])


    return (
        <>
            <p className="widget__content--text">Are you looking for any <br /> particular eyewear brands?</p>
            <ul className="widget__content--list">
                <li className="widget__content--item" onClick={() => {nextContent()}}>
                    <h3 className="widget__content--heading">Yes, I have some in mind</h3>
                </li>
                <li className="widget__content--item" onClick={() => {finalContent()}}>
                    <h3 className="widget__content--heading">No, brand isn't important</h3>
                </li>
            </ul>
        </>
    );

};

export default ContentNine;
