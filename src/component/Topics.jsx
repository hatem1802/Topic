import React, { useEffect } from "react";

const Topics = () => {
  // get all buttons that has topic_btn class
  const buttons = document.getElementsByClassName("topic_btn");
  // get all divs that has topics class
  const topics = document.getElementsByClassName("topics");

  useEffect(() => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = () => {
        // remove active class from all buttons
        for (let j = 0; j < buttons.length; j++) {
          buttons[j].classList.remove("active");
        }
        // add active className for the clicked button
        buttons[i].classList.add("active");
        //show the selected topic
        if (buttons[i].classList.contains("active")) {
          // hide all topics
          for (let j = 0; j < topics.length; j++) {
            topics[j].classList.add("hide");
            topics[j].classList.remove("active");
          }
          // show the topic that have the same index of buttons
          topics[i].classList.add("active");
          topics[i].classList.remove("hide")
        }
      };
    }
  });

  return (
    <>
      <section className="browse_topics d-flex align-items-center flex-column">
        <h2 className="fs-1 fw-bold mb-5">Browse Topics</h2>
        <div className="btn_box text-center d-flex justify-content-center col-12 flex-wrap gap-2 gap-md-">
          <button className="topic_btn active">Design</button>
          <button className="topic_btn">Marketing</button>
          <button className="topic_btn">Finance</button>
          <button className="topic_btn">Music</button>
          <button className="topic_btn">Education</button>
        </div>
        <div className="container mt-5">
          {/* design topics */}

          <div className={`topics active justify-content-center flex-column flex-lg-row gap-3 col-11 mx-auto`}>
            {/* card 1 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Web Design</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#00B0FF",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      14
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%", display: "block" }}
                  src="../images/undraw_Remote_design_team_re_urdx.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 2 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Graphic</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#00B0FF",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      75
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_Redesign_feedback_re_jvm0.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 3 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Logo Design</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#00B0FF",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      100
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/colleagues-working-cozy-office-medium-shot.png"
                  alt=""
                />
              </div>
            </a>
          </div>

          {/* marketing topics */}

          <div className="topics hide justify-content-center flex-column flex-lg-row gap-3 col-11 mx-auto">
            {/* card 1 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Advertising</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#F50057",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      14
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%", display: "block" }}
                  src="../images/undraw_online_ad_re_ol62.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 2 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Video Content</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#F50057",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      75
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_Group_video_re_btu7.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 3 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Viral Tweet</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#F50057",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      100
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_viral_tweet_gndb.png"
                  alt=""
                />
              </div>
            </a>
          </div>

          {/* finance topics */}

          <div className="topics hide justify-content-center flex-column flex-lg-row gap-3 col-11 mx-auto">
            {/* card 1 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-6 hover_up"
            >
              <div className="parent">
                <div className="content d-flex justify-content-between">
                  <div className="quote">
                    <h4>Graphic</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#536DFE",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      75
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_Finance_re_gnv2.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 2 */}
            <div className="finance col-12 col-lg-6 hover_up">
              <div className="bg-color"></div>
              <div
                style={{ padding: "2rem", height: "100%" }}
                className="parent d-flex flex-column text-light justify-content-between"
              >
                <div className="parent_up">
                  <div className="content d-flex">
                    <div className="quote">
                      <h4 className="fw-bold">Finance</h4>
                      <p className="fs-5 fw-medium">
                        Topic Listing Template includes homepage, listing page,
                        detail page, and contact page. You can feel free to edit
                        and adapt for your CMS requirements.
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          background: "#00BBFF",
                          padding: "3px 6px",
                          borderRadius: "5px",
                          color: "white",
                        }}
                      >
                        25
                      </p>
                    </div>
                  </div>
                  <div className="btn_box">
                    <a href="#" className="btn mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="social_share d-flex fs-5 fw-medium">
                  <span>Share: </span>
                  <div className="icon_box ms-4 d-flex flex-grow-1 justify-content-between">
                    <div className="social_icons">
                      <a href="https://www.x.com" target="_blank">
                        <i className="fa-brands fa-md fa-x-twitter btn"></i>
                      </a>
                      <a href="https://www.facebook.com" target="_blank">
                        <i className="fa-brands fa-md fa-facebook btn"></i>
                      </a>
                      <a href="https://www.pinterest.com" target="_blank">
                        <i className="fa-brands fa-md fa-pinterest btn"></i>
                      </a>
                    </div>
                    <a className="save_icon me-5">
                      <i className="fa-regular fa-bookmark fa-lg me-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* music topics */}

          <div className="topics hide justify-content-center flex-column flex-lg-row gap-3 col-11 mx-auto">
            {/* card 1 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Composing Song</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#F9A826",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      14
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%", display: "block" }}
                  src="../images/undraw_Compose_music_re_wpiw.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 2 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Online Music</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#F9A826",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      75
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_Podcast_audience_re_4i5q.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 3 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Podcast</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#F9A826",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      100
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_happy_music_g6wc.png"
                  alt=""
                />
              </div>
            </a>
          </div>

          {/* education topics */}

          <div className="topics hide justify-content-center flex-column flex-lg-row gap-3 col-11 mx-auto">
            {/* card 1 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-6 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Graduator</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#00BFA6",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      14
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%", display: "block" }}
                  src="../images/undraw_Graduation_re_gthn.png"
                  alt=""
                />
              </div>
            </a>
            {/* card 2 */}
            <a
              href="#"
              className="topic_card d-flex flex-column col-12 col-lg-6 hover_up"
            >
              <div className="parent">
                <div className="content d-flex">
                  <div className="quote">
                    <h4>Education</h4>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "#00BFA6",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      75
                    </p>
                  </div>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="./images/undraw_Educator_re_ju47.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
