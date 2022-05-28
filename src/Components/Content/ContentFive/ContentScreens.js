import React, {useEffect, useState} from 'react';
import glass_fill_1 from "../../Shared/Images/glass_fill_1.png"
import glass_fill_2 from "../../Shared/Images/glass_fill_1.png"
import glass_fill_3 from "../../Shared/Images/glass_fill_1.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentGlasses from "../ContentThree/ContentGlasses";
import ContentBetweenPage from "../ContentThree/ContentBetweenPage";
import ContentBetweenFour from "../ContentFour/ContentBetweenFour";
import ContentSize from "../ContentFour/ContentSize";
import ContentGender from "../ContentSix/ContentGender";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";

const ContentScreens = (props) => {

    contentHeader("5", false)

    function nextContentGlass(valueImage){
        let url = props.urlEdit + `&blue_light=${valueImage}`

        props.nextContent(<ContentGender
            urlEdit={url}
            nextContent={props.nextContent}
            isMan={props.isMan}
            setHeader={props.setHeader}
        />)
    }

    function skipContentSunglasses(valueImage){
        let url = props.urlEdit + `&shade=${valueImage}`

        props.nextContent(<ContentGender
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
            let url = props.urlEdit.split("?"),
                formatter = ""
            if(url.length > 1){
                let parser = url[1].split("&")
                parser.pop()
                parser = parser.join("&")
                formatter = url[0] + "?" + parser
            }

            props.setHeader("content")
            backContent(props, <ContentSize
                isMan={props.isMan}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={formatter}
            />)
        })
    }, [props])

    if(props.eyeglasses){
        return (
            <>
                <p className="widget__content--text">Would you like to protect your eyes <br /> from light emanating from
                    screens?</p>
                <ul className="widget__content--list">
                    <li className="widget__content--item" onClick={() => {nextContentGlass("true")}}>
                        <h3 className="widget__content--heading">Yes</h3>
                    </li>
                    <li className="widget__content--item" onClick={() => {nextContentGlass("false")}}>
                        <h3 className="widget__content--heading">No</h3>
                    </li>
                </ul>

            </>
        );
    } else {
        return (
            <>
                <p className="widget__content--text">Would you like to protect your eyes <br /> from light emanating from
                    screens?</p>
                <ul className="widget__content--list">
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {skipContentSunglasses("dark")}}
                    >
                        <img src={glass_fill_1} alt="glass 1" className="widget__content--image__border" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">Dark Shade</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {skipContentSunglasses("light")}}
                    >
                        <img src={glass_fill_2} alt="glass 2" className="widget__content--image__border" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">Light Shade</h3>
                    </li>
                    <li
                        className="widget__content--item widget__content--content__image"
                        onClick={() => {skipContentSunglasses("transition")}}
                    >
                        <img src={glass_fill_3} alt="glass 3" className="widget__content--image__border" />
                            <span className="widget__content--border" />
                            <h3 className="widget__content--heading">Transitioning Shade</h3>
                    </li>
                </ul>
            </>
        );
    }

};

export default ContentScreens;
