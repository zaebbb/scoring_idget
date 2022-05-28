import React, {useEffect, useState} from 'react';
import glass_3 from "../../Shared/Images/glass_3.png"
import glass_4 from "../../Shared/Images/glass_4.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentTwoMan from "./ContentTwoMan";
import ContentBetweenPage from "../ContentThree/ContentBetweenPage";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentStart from "../ContentStart";

const ContentTwoWoman = (props) => {

    contentHeader("2", false)

    function nextContent(valueImage, eyeglasses = true){
        let url = props.urlEdit + `&eyewear_type=${valueImage}`

        if(eyeglasses){
            props.nextContent(<ContentBetweenPage
                urlEdit={url}
                nextContent={props.nextContent}
                eyeglasses={eyeglasses}
                isMan={props.isMan}
                setHeader={props.setHeader}
            />)
        } else {
            props.nextContent(<ContentBetweenPage
                eyeglasses={eyeglasses}
                urlEdit={url}
                nextContent={props.nextContent}
                isMan={props.isMan}
                setHeader={props.setHeader}
            />)
        }
    }

    function skipContent(){
        props.nextContent(<ContentBetweenPage
            eyeglasses={true}
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
            backContent(props, <ContentOne
                isMan={props.isMan}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={formatter}
            />)
        })
    }, [props])

    return (
        <>
           <p className="widget__content--text">You are looking for</p>
           <ul className="widget__content--list">
               <li className="widget__content--item" onClick={() => {nextContent("210", true)}}>
                   <img src={glass_3} alt="woman" className="widget__content--image image__glass" />
                       <h3 className="widget__content--heading">Eyeglasses</h3>
               </li>
               <li className="widget__content--item" onClick={() => {nextContent("211", false)}}>
                   <img src={glass_4} alt="man" className="widget__content--image image__glass" />
                       <h3 className="widget__content--heading">Sunglasses</h3>
               </li>
           </ul>

            <p className="widget__skip" onClick={() => {skipContent()}}>I'd like to see both</p>
        </>
    );
};

export default ContentTwoWoman;
