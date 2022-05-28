import React, {useState} from 'react';
import logoImage from "./Shared/Images/logo.png";
import nextImage from "./Shared/Images/next.svg";
import exitImage from "./Shared/Images/exit.svg";
import backImage from "./Shared/Images/back.svg";
import ContentStart from "./Content/ContentStart";

const Header = (props) => {

    let type = props.type

    function exit(){
        props.setHeader("start")
        props.setViewStartPage(true)
    }

    if(type === "start"){
        return (
            <div className="widget__header">
                <div className="widget__header--content">
                    <img className="widget__header--logo" src={logoImage}  alt={"logo"}/>
                    <img className="widget__header--next next__bnt--start" src={nextImage}  alt={"next"}/>
                </div>
                <span className="widget__header--line" />
            </div>
        );
    } else if(type === "content"){
        return (
            <div className="widget__header">
                <div className="widget__header--content">
                    <img
                        className="widget__header--back widget__header--btn__close"
                        src={exitImage}
                        alt={"exit"}
                    />
                    <span className="widget__header--text">1/10</span>
                    <img className="widget__header--exit widget__header--btn__back" src={backImage}  alt={"exit"} />
                </div>
                <span className="widget__header--line active__line" style={{"--i": "10%"}} />
            </div>
        );
    } else if(type === "final"){
        return (
            <div className="widget__header">
                <div className="widget__header--content">
                    <img className="widget__header--back" src={logoImage} />
                    <img className="widget__header--exit widget__header--btn__close" src={exitImage} />
                </div>
                <span className="widget__header--line active__line" style={{"--i": "100%"}} />
            </div>
        )
    }
};

export default Header;
