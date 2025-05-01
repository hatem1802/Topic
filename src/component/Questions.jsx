import React, { useEffect } from 'react'

const Questions = () => {
    let buttons = document.getElementsByClassName("btn_collapse");
    let span_collapse = document.getElementsByClassName("span_collapse");

    useEffect(() => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = () => {
                if (span_collapse[i].classList.contains("active")) {
                    for (let j = 0; j < span_collapse.length; j++) {
                        span_collapse[j].classList.remove("active");
                    }
                    return;
                }
                for (let j = 0; j < span_collapse.length; j++) {
                    span_collapse[j].classList.remove("active");
                }
                span_collapse[i].classList.add("active");
            };
        }
    })

    return (
        <>
            <section className="questions">
                <div className="container">
                    <h2 style={{ fontWeight: "700", fontSize: "2.8rem" }}>
                        Frequently Asked Questions
                    </h2>
                    <div className="content d-flex">
                        <div className="img_box col-6">
                            <img
                                style={{ width: "80%" }}
                                src="./images/faq_graphic.jpg"
                                alt=""
                            />
                        </div>
                        <div className="text d-flex flex-column justify-content-center gap-3 col-6">
                            <div className="span_collapse d-flex flex-column">
                                <button className="btn_collapse d-flex justify-content-between align-items-center">
                                    <b> What is Topic Listing?</b>
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                                <span>
                                    Topic Listing is free Bootstrap 5 CSS template.
                                    <b>You are not allowed to redistribute this template </b> 
                                    on any other template collection website without
                                    our permission. Please contact TemplateMo for
                                    more detail. Thank you.
                                </span>
                            </div>
                            <div className="span_collapse d-flex flex-column">
                                <button className="btn_collapse d-flex justify-content-between align-items-center">
                                    <b> How to find a topic?</b>
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>{" "}
                                <span>
                                    You can search on Google with <b>keywords</b> such as templatemo portfolio, templatemo one-page layouts, photography, digital marketing, etc.

                                </span>
                            </div>
                            <div className="span_collapse d-flex flex-column">
                                <button className="btn_collapse d-flex justify-content-between align-items-center">
                                    <b>Does it need to paid?</b>
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>{" "}
                                <span>
                                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <p style={{color:"red", display:"inline"}}> .accordion-body</p> , though the transition does limit overflow.

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Questions
