import React, {useEffect, useState} from 'react';
import contentHeader from "../../Functions/ContentHeader";
import ContentGlassSlider from "../ContentEut/ContentGlassSlider";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentScreens from "../ContentFive/ContentScreens";
import ContentGender from "../ContentSix/ContentGender";

const ContentDefine = (props) => {

    contentHeader("7", false)

    function nextContent(valueImage){
        let url = props.urlEdit + `&facial_features=${valueImage}`

        props.nextContent(<ContentGlassSlider
            urlEdit={url}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
        />)
    }

    function skipContent(){
        props.nextContent(<ContentGlassSlider
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
            let url = props.urlEdit.split("?"),
                formatter = ""
            if(url.length > 1){
                let parser = url[1].split("&")
                parser.pop()
                parser = parser.join("&")
                formatter = url[0] + "?" + parser
            }

            props.setHeader("content")
            backContent(props, <ContentGender
                isMan={props.isMan}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={formatter}
            />)
        })
    }, [props])

    return (
        <>
            <p className="widget__content--text">How would you define <br /> your facial features?</p>
            <ul className="widget__content--list">
                <li
                    className="widget__content--item widget__item--hundred__height"
                    onClick={nextContent("sharp")}
                >
                    <h3 className="widget__content--heading">Sharp</h3>
                </li>
                <li
                    className="widget__content--item widget__item--hundred__height"
                    onClick={nextContent("rounded")}
                >
                    <h3 className="widget__content--heading">Rounded</h3>
                </li>
                <li
                    className="widget__content--item widget__item--hundred__height"
                    onClick={nextContent("between")}
                >
                    <h3 className="widget__content--heading">In between</h3>
                </li>
            </ul>
            <p className="widget__skip" onClick={() => {skipContent()}}>I don’t know</p>
        </>
    );

};

export default ContentDefine;
