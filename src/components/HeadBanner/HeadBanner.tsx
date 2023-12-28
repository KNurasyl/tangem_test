import React from "react";
import { pathBtnIcon } from "../../constant";
import "../../styles/HeadBanner.scss";


export const HeadBanner = () => {
    return (
        <div className="HeadBanner">
            <div className="content_bg"></div>
            <div className="content_text_sm">
                <h1>Black Friday, <span>10%OFF</span></h1>
                <button><img src={pathBtnIcon} alt="arrow-icon" /></button>
            </div>
            <div className="content_text">
                <div className="text">
                    <h2>Black Friday<p>, <span className="date">24-27 Nov</span></p></h2>
                    <h2><span className="text_yellow">10%OFF</span></h2>
                    <h3>Use code<span className="text_yellow">10FRIDAY</span><p>at checkout</p></h3>
                </div>
                <button>Shop now</button>
            </div>
        </div>
    );
};