import React from "react";
import q1 from "../../assets/img/homePage/q1.webp";
import  "./Homepage.css"
const HomeCarousel = () => {
  return (
    <div className="container">
      <div style={{display: "flex" , justifyContent: "space-around" , margin: "35px 0"}}>
        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">
            <img src={q1} alt="" />
            <span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
          </a>
        </div>

        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">

            <img src={q1} alt="" />

<span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
            
          </a>
        </div>

        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">
            <img src={q1} alt="" />
            <span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
          </a>
        </div>

        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">
            <img src={q1} alt="" />
            <span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
          </a>
        </div>

        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">
            <img src={q1} alt="" />
            <span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
          </a>
        </div>

        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">
            <img src={q1} alt="" />
            <span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
          </a>
        </div>

        <div className="title_medicine">
          <a style={{display: "flex"}} href="#">
            <img src={q1} alt="" />
            <span className="name_medicine">
              Tra thuốc <br /> chính hãng
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
