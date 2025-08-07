import React from "react";

function RightSection({ head, desription, learnmore, learnmoretext, imageurl }) {
  return (
    <div className="container mb-5">
      <div className="row mt-5 align-items-center">
        <div className="col-lg-4 col-md-12 text-center text-lg-start mt-lg-0 pt-lg-5 ps-lg-5 fs-5">
          <div className="row">
            <h2 className="display-4">{head}</h2>
          </div>
          <div className="row">
            <p className="mt-3">{desription}</p>
          </div>
          <div className="row justify-content-center justify-content-lg-start">
            <a href={learnmore} className="text-decoration-none d-inline-block mt-3">
              {learnmoretext}
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 text-center mt-4 mt-lg-0">
          <img src={imageurl} alt={head} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;