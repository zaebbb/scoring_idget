import React, {useEffect, useState} from 'react';
import face_1 from "../../Shared/Images/face_1.png"
import face_2 from "../../Shared/Images/face_2.png"
import face_3 from "../../Shared/Images/face_3.png"
import face_4 from "../../Shared/Images/face_4.png"
import face_5 from "../../Shared/Images/face_5.png"
import face_6 from "../../Shared/Images/face_6.png"
import face_7 from "../../Shared/Images/face_7.png"
import face_8 from "../../Shared/Images/face_8.png"
import face_9 from "../../Shared/Images/face_9.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentDefine from "../ContentSeven/ContentDefine";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentSize from "../ContentFour/ContentSize";
import ContentScreens from "../ContentFive/ContentScreens";

const ContentGender = (props) => {

    contentHeader("6", false)

    function nextContent(valueImage){
        let url = props.urlEdit + `&face_shape=${valueImage}`

        props.nextContent(<ContentDefine
            urlEdit={url}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
            isMan={props.isMan}
        />)
    }

    function skipContent(){
        props.nextContent(<ContentDefine
            urlEdit={props.urlEdit}
            isMan={props.isMan}
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
            backContent(props, <ContentScreens
                isMan={props.isMan}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={formatter}
            />)
        })
    }, [props])

    if(props.isMan){
        return (
            <>
                <p className="widget__content--text">Every face shape has a <br /> perfect fit. What’s yours?</p>
                <ul className="widget__content--list">
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("long")}}
                    >
                        <img src={face_1} alt="face 1"
                             className="widget__content--image__border image__face--man" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">I have a long face</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("round")}}
                    >
                        <img src={face_2} alt="face 2"
                             className="widget__content--image__border image__face--man" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">I have a round face</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("between")}}
                    >
                        <img src={face_3} alt="face 3"
                             className="widget__content--image__border image__face--man" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">In between</h3>
                    </li>
                </ul>
                <p className="widget__skip" onClick={() => {skipContent()}}>I don’t know</p>
            </>
        );
    } else if(props.isMan === undefined) {
        return (
            <>
                <p className="widget__content--text">Every face shape has a <br /> perfect fit. What’s yours?</p>
                <ul className="widget__content--list">
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("long")}}
                    >
                        <img src={face_7} alt="face 7"
                             className="widget__content--image__border image__face--manwoman" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">I have a long face</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("round")}}
                    >
                        <img src={face_8} alt="face 8"
                             className="widget__content--image__border image__face--manwoman" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">I have a round face</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("between")}}
                    >
                        <img src={face_9} alt="face 9"
                             className="widget__content--image__border image__face--manwoman" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">In between</h3>
                    </li>
                </ul>
                <p className="widget__skip" onClick={() => {skipContent()}}>I don’t know</p>
            </>
        );
    } else {
        return (
            <>
                <p className="widget__content--text">Every face shape has a <br /> perfect fit. What’s yours?</p>
                <ul className="widget__content--list">
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("long")}}
                    >
                        <img src={face_4} alt="face 4"
                             className="widget__content--image__border image__face--woman" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">I have a long face</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("round")}}
                    >
                        <img src={face_5} alt="face 5"
                             className="widget__content--image__border image__face--woman" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">I have a round face</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {nextContent("between")}}
                    >
                        <img src={face_6} alt="face 6"
                             className="widget__content--image__border image__face--woman" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">In between</h3>
                    </li>
                </ul>
                <p className="widget__skip" onClick={() => {skipContent()}}>I don’t know</p>
            </>
        );
    }

};

export default ContentGender;
