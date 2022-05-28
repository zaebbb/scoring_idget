import React, {useEffect, useState} from 'react';
import womanImage from "./../Shared/Images/woman.png"
import manImage from "./../Shared/Images/man.png"
import ContentTwoMan from "./ContentTwo/ContentTwoMan";
import contentHeader from "../Functions/ContentHeader";
import ContentTwoWoman from "./ContentTwo/ContentTwoWoman";
import ContentStart from "./ContentStart";
import exitContent from "../Functions/ExitContent";
import backContent from "../Functions/ContentBack";

const ContentOne = (props) => {

    contentHeader("1", false)

    function skipContent(){
        let url = props.urlEdit + "gender=4"

        props.nextContent(<ContentTwoMan
            isMan={undefined}
            urlEdit={url}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
        />)
    }

    function manContent(){
        let url = props.urlEdit + "gender=4"

        props.nextContent(<ContentTwoMan
            isMan={true}
            urlEdit={url}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
        />)
    }

    function womanContent(){
        let url = props.urlEdit + "gender=5"

        props.nextContent(<ContentTwoWoman
            isMan={false}
            urlEdit={url}
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
            props.setHeader("start")
            backContent(props, <ContentStart
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={props.urlEdit}
            />)
        })
    }, [props])

    return (
        <>
            <p className="widget__content--text">You are looking for</p>
            <ul className="widget__content--list">
                <li className="widget__content--item" onClick={womanContent}>
                    <img src={womanImage} alt="woman" className="widget__content--image" />
                    <h3 className="widget__content--heading">Women's Styles</h3>
                </li>
                <li className="widget__content--item" onClick={manContent}>
                    <img src={manImage} alt="man" className="widget__content--image" />
                    <h3 className="widget__content--heading">Men's Styles</h3>
                </li>
            </ul>

            <p className="widget__skip" onClick={skipContent}>I'd like to see both</p>
        </>
    );
};

export default ContentOne;
