import React, {useEffect, useState} from 'react';
import slider_glass_1 from "../../Shared/Images/slider_brand/img_1.png"
import slider_glass_2 from "../../Shared/Images/slider_brand/img_2.png"
import slider_glass_3 from "../../Shared/Images/slider_brand/img_3.png"
import slider_glass_4 from "../../Shared/Images/slider_brand/img_4.png"
import slider_glass_5 from "../../Shared/Images/slider_brand/img_5.png"
import slider_glass_6 from "../../Shared/Images/slider_brand/img_6.png"
import slider_glass_7 from "../../Shared/Images/slider_brand/img_7.png"
import slider_glass_8 from "../../Shared/Images/slider_brand/img_8.png"
import slider_glass_9 from "../../Shared/Images/slider_brand/img_9.png"
import slider_glass_10 from "../../Shared/Images/slider_brand/img_10.png"
import slider_glass_11 from "../../Shared/Images/slider_brand/img_11.png"
import slider_glass_12 from "../../Shared/Images/slider_brand/img_12.png"
import contentHeader from "../../Functions/ContentHeader";
import ContentGlasses from "../ContentThree/ContentGlasses";
import ContentBetweenPage from "../ContentThree/ContentBetweenPage";
import ContentBetweenFour from "../ContentFour/ContentBetweenFour";
import {Swiper, SwiperSlide} from "swiper/react"
import {Grid} from "swiper";
import ContentNine from "../ContentNine/ContentNine";
import ContentFinal from "../ContentFinal/ContentFinal";
import ContentOne from "../ContentOne";
import exitContent from "../../Functions/ExitContent";
import backContent from "../../Functions/ContentBack";
import ContentDefine from "../ContentSeven/ContentDefine";

const ContentBrandSlider = (props) => {

    contentHeader("9", true)

    const [activeSlide_1, setActiveSlide_1] = useState(false)
    const [activeSlide_2, setActiveSlide_2] = useState(false)
    const [activeSlide_3, setActiveSlide_3] = useState(false)
    const [activeSlide_4, setActiveSlide_4] = useState(false)
    const [activeSlide_5, setActiveSlide_5] = useState(false)
    const [activeSlide_6, setActiveSlide_6] = useState(false)
    const [activeSlide_7, setActiveSlide_7] = useState(false)
    const [activeSlide_8, setActiveSlide_8] = useState(false)
    const [activeSlide_9, setActiveSlide_9] = useState(false)
    const [activeSlide_10, setActiveSlide_10] = useState(false)
    const [activeSlide_11, setActiveSlide_11] = useState(false)
    const [activeSlide_12, setActiveSlide_12] = useState(false)

    const [arrayResult, setArrayResult] = useState([])

    useEffect(() => {
        let btn = document.querySelector(".widget__slider--btn")
        btn.disabled = true

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
            backContent(props, <ContentNine
                nextContent={props.nextContent}
                setHeader={props.setHeader}
                urlEdit={formatter}
            />)
        })
    }, [props]);



    function nextContent(){
        props.setHeader("final")

        let url = props.urlEdit + `&brand=${arrayResult.join(",")}`

        props.nextContent(<ContentFinal
            urlEdit={url}
            nextContent={props.nextContent}
            setHeader={props.setHeader}
        />)
    }

    function toggleClass(textArray = "", isItem = false){

        if(isItem && !arrayResult.includes(textArray)){
            setArrayResult([...arrayResult, textArray])
        } else {
            let index = arrayResult.indexOf(textArray)
            if(index){
                let array = arrayResult
                array = array.filter((elem, i) => i !== index)
                setArrayResult([...array])
            }
        }

        let slides = document.querySelectorAll(".swiper__content--slide")
        let btn = document.querySelector(".widget__slider--btn")

        slides.forEach(() => {

            if(!checkSlidesActive()){
                btn.disabled = true
            } else {
                btn.disabled = false
            }
        })
    }

    function checkSlidesActive(){
        if(
            activeSlide_1 || activeSlide_2 || activeSlide_3 || activeSlide_4 ||
            activeSlide_5 || activeSlide_6 || activeSlide_7 || activeSlide_8 ||
            activeSlide_9 || activeSlide_10 || activeSlide_11 || activeSlide_12
        ){
            return true
        }

        return false
    }


    return (
        <>
            <p className="widget__content--text widget__content--big">Which frame style are you looking for?</p>
            <p className="widget__content--text widget__content--small">You can pick more than one.</p>

                <Swiper
                    className="swiper__content"
                    modules={[Grid]}
                    slidesPerView={2}
                    grid={{rows: 3}}
                    spaceBetween={10}
                    direction={"horizontal"}
                >
                    <SwiperSlide
                        className={
                            activeSlide_1 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_1(!activeSlide_1)
                            toggleClass("ray_ban", !activeSlide_1)
                        }}
                    >
                        <img src={slider_glass_1} alt={"slider_glass_1"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_2 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_2(!activeSlide_2)
                            toggleClass("oakley", !activeSlide_2)
                        }}
                    >
                        <img src={slider_glass_2} alt={"slider_glass_2"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_3 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_3(!activeSlide_3)
                            toggleClass("gucci", !activeSlide_3)
                        }}
                    >
                        <img src={slider_glass_3} alt={"slider_glass_3"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_4 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_4(!activeSlide_4)
                            toggleClass("armani_exchange", !activeSlide_4)
                        }}
                    >
                        <img src={slider_glass_4} alt={"slider_glass_4"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_5 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_5(!activeSlide_5)
                            toggleClass("hilary_duff", !activeSlide_5)
                        }}
                    >
                        <img src={slider_glass_5} alt={"slider_glass_5"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_6 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_6(!activeSlide_6)
                            toggleClass("prada", !activeSlide_6)
                        }}
                    >
                        <img src={slider_glass_6} alt={"slider_glass_6"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_7 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_7(!activeSlide_7)
                            toggleClass("versace", !activeSlide_7)
                        }}
                    >
                        <img src={slider_glass_7} alt={"slider_glass_7"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_8 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_8(!activeSlide_8)
                            toggleClass("vogue", !activeSlide_8)
                        }}
                    >
                        <img src={slider_glass_8} alt={"slider_glass_8"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_9 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_9(!activeSlide_9)
                            toggleClass("michael_kors", !activeSlide_9)
                        }}
                    >
                        <img src={slider_glass_9} alt={"slider_glass_9"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_10 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_10(!activeSlide_10)
                            toggleClass("coach", !activeSlide_10)
                        }}
                    >
                        <img src={slider_glass_10} alt={"slider_glass_10"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_11 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_11(!activeSlide_11)
                            toggleClass("tory_burch", !activeSlide_11)
                        }}
                    >
                        <img src={slider_glass_11} alt={"slider_glass_11"} className="swiper__content--image" />
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            activeSlide_12 ?
                                "swiper__content--slide swiper-slide swiper__content--brand slide__active" :
                                "swiper__content--slide swiper-slide swiper__content--brand"
                        }
                        onClick={() => {
                            setActiveSlide_12(!activeSlide_12)
                            toggleClass("burberry", !activeSlide_12)
                        }}
                    >
                        <img src={slider_glass_12} alt={"slider_glass_12"} className="swiper__content--image" />
                    </SwiperSlide>
                </Swiper>

            <button
                className="widget__content--btn widget__slider--btn"
                onClick={() => {nextContent()}}
            >Continue</button>
        </>
    );

};

export default ContentBrandSlider;
