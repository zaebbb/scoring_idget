import React, {useEffect, useState} from 'react';
import contentHeader from "../../Functions/ContentHeader";
import ContentGlassSlider from "../ContentEut/ContentGlassSlider";
import final_image from "./../../Shared/Images/image_final.png"
import exitContent from "../../Functions/ExitContent";

const ContentFinal = (props) => {

    contentHeader("10", false)

    useEffect(() => {
        let btnClose = document.querySelector(".widget__header--btn__close")
        btnClose.addEventListener("click", () => {
            exitContent(props)
        })
    }, [props])

    return (
        <>
            <img src={final_image} alt="main image" className="widget__content--final__image" />
            <h3 className="widget__content--final__heading">We've found some awesome <br /> frames for you!</h3>
            <p className="widget__content--final__description">Send the results to your email to
                    receive <br /> special discounts.</p>
            <button className="widget__content--btn" onClick={() => {console.log(props.urlEdit)}}>Send</button>
            <p className="widget__skip content__agree">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy
                and receiving promotion emails</p>
        </>
    );

};

export default ContentFinal;
