import React, { useEffect } from "react";
import Header from "../component/Header";
import Topics from "../component/Topics";
import ToTop from "../component/ToTop";
import Questions from "../component/Questions";
import Footer from "../component/Footer";
const Homepage = () => {

  return (
    <>
      <ToTop />
      <Header />

      <section className="interface_section">
        <div className="inter_up d-flex flex-column justify-content-center align-items-center">
          <h1
            style={{ fontSize: "3.5rem", fontWeight: "700" }}
            className="text-light text-center"
          >
            Discover. Learn. Enjoy
          </h1>
          <p className="color2 fs-5 fw-bold">
            platform for creatives around the world
          </p>
          <div className="search_bar d-flex align-items-center mt-4">
            <i className="fa-solid fa-magnifying-glass mx-4"></i>
            <form>
              <input
                className="search_interface"
                type="search"
                placeholder={"Design, Code, Marketing, Finance..."}
              />
              <input type="submit" className="btn" value={"Search"} />
            </form>
          </div>
        </div>
        <div className="inter_down">
          <div className="container d-flex justify-content-center flex-column flex-lg-row gap-4">
            <a
              href="#"
              className="web_design d-flex flex-column col-12 col-lg-4 hover_up"
            >
              <div className="content d-flex">
                <div className="quote">
                  <h4>Web Design</h4>
                  <p className="fs-5">
                    When you search for front end developer you will notice that
                    Hatem Khaled is one of the best developers
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
              <div className="image_box">
                <img
                  style={{ width: "100%" }}
                  src="../images/undraw_Remote_design_team_re_urdx.png"
                  alt=""
                />
              </div>
            </a>
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
        </div>
      </section>


      <Topics />

      <section className="how_it_work">
        <div className="container d-flex flex-column mx-auto col-10">
          <h2
            style={{ fontSize: "2.8rem" }}
            className="fw-bold text-center mb-5"
          >
            How does it work?
          </h2>
          <div className="d-flex">
            <div
              style={{ position: "relative" }}
              className="content d-flex flex-column"
            >
              <div className="content_1 mb-5 d-flex">
                <div className="icon_box">
                  <i className="fa-solid fa-magnifying-glass fs-3"></i>
                </div>
                <div className="text">
                  <h3>Search your favourite topic</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias
                    illum sed esse ad dignissimos libero sunt, quisquam numquam
                    aliquam? Voluptas, accusamus omnis?
                  </p>
                </div>
              </div>
              <br />
              <div className="content_2 mb-5 d-flex">
                <div className="icon_box">
                  <i
                    style={{ paddingBottom: "1.3rem" }}
                    className="fa-regular fa-bookmark fs-3"
                  ></i>
                </div>
                <div className="text">
                  <h3>Bookmark & Keep it for yourself</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias
                    illum sed esse ad dignissimos libero sunt, quisquam numquam
                    aliquam? Voluptas, accusamus omnis?
                  </p>
                </div>
              </div>
              <br />
              <div className="content_3 mb-5 d-flex">
                <div className="icon_box">
                  <i className="fa-solid fa-magnifying-glass fs-3"></i>
                </div>
                <div className="text">
                  <h3>Read & Enjoy</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias
                    illum sed esse ad dignissimos libero sunt, quisquam numquam
                    aliquam? Voluptas, accusamus omnis?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_box mx-auto">
            <span className="fs-5 fw-medium">Want to learn more?</span>
            <a href="#" className="btn">
              Check out Youtube
            </a>
          </div>
        </div>
      </section>

      <Questions />

      <section className="get_in_touch">
        <div className="container">
          <h2 style={{fontSize:"2.8rem", fontWeight:"bold", textAlign:"center"}}>Get in touch</h2>
          <br />
          <div className="flex">
            <div className="content">
              <div className="map_box col-5">
              </div>
              <div className="address_box col-7 d-flex gap-5">
                <div className="head_office col-5">
                  <h4>Head office</h4>
                  <p>Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
                  <hr />
                  <p>Phone <a href="tel:+0123456789">0123456789</a> <br /> Email <a href="mailto:">example@gmail.com</a> </p>
                </div>
                <div className="head_office col-5">
                  <h4>Dubai office</h4>
                  <p>Burj Park, Downtown Dubai, United Arab Emirates</p>
                  <hr />
                  <p>Phone <a href="tel:+0123456789">0123456789</a> <br /> Email <a href="mailto:">example@gmail.com</a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
