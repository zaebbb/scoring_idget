import React, {useEffect, useState} from 'react';
import mainImage from "../Shared/Images/main_image.png";
import ContentOne from "./ContentOne";
import contentHeader from "../Functions/ContentHeader";

const ContentStart = (props) => {

    contentHeader("0", false)

    function nextContent(){
        props.setHeader("content")
        props.nextContent(<ContentOne
            urlEdit={props.urlEdit}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
        />)
    }

    useEffect(() => {
        function nextContent(){
            props.setHeader("content")
            props.nextContent(<ContentOne
                urlEdit={props.urlEdit}
                nextContent={props.nextContent}
                setHeader={props.setHeader}
            />)
        }

        let btn = document.querySelector(".next__bnt--start")
        btn.addEventListener("click", () => {
            nextContent()
        })
    }, [props])

    return (
        <>
            <img src={mainImage} className="widget__content--main__image"  alt={"main_image"}/>
            <h3 className="widget__content--heading">Let's find your perfect pair!</h3>
            <p className="widget__content--description">Take the quiz to easily discover your perfect fit from thousands
                of styles</p>
            <button className="widget__content--btn" onClick={nextContent}>Start Now</button>
        </>
    );
};

export default ContentStart;
