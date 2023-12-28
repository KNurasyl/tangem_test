import React, {useState, useEffect} from "react";
import { pathCloseIcon, pathCardBgSm, pathCardBg } from "../../constant";
import "../../styles/CardBanner.scss";


export const CardBanner = () => {
    const [isBannerClosed, setIsBannerClosed] = useState(localStorage.getItem("isBannerClosed") === "true");
    
    useEffect(() => {
        isBannerClosed && localStorage.setItem("isBannerClosed", "true");
    }, [isBannerClosed]);

    const handleBannerClose = () => {
        setIsBannerClosed(true);
        console.log(654654654);
        
    };

    return (
        !isBannerClosed ?
        <div className="CardBanner">
            <img className="content_bg content_bg_sm" src={pathCardBgSm} alt="card_bg_sm" />
            <img className="content_bg content_bg_lg" src={pathCardBg} alt="card_bg" />
            <button className="close_btn" onClick={handleBannerClose}>
                <img src={pathCloseIcon} alt="close_icon" />
            </button>
            <div className="content_text">
                <h1>Black Friday</h1>
                <h2>10%OFF</h2>
                <p>Use code <span>10FRIDAY</span> at checkout</p>
                <button></button>
            </div>
        </div> : null
    );
};