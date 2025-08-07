import React from "react";

function LeftSection({
  imageurl,
  productname,
  productDescription,
  tryDemo,
  learnmore,
  googleplay,
  appStore,
  tryDemotext,
  learnmoretext,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 p-3 p-md-5 align-items-center">
        <div className="col-lg-8 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
          <img alt={productname} src={imageurl} className="img-fluid" />
        </div>
        <div className="col-lg-4 col-md-12 text-center text-lg-start">
          <div className="fs-5">
            <h1 className="display-4">{productname}</h1>
            <p className="mt-4">{productDescription}</p>
          </div>

          <div>
            <div className="row mb-4 mt-4 justify-content-center justify-content-lg-start">
              <div className="col-auto mb-2 mb-sm-0">
                <a href={tryDemo} className="text-decoration-none">
                  {tryDemotext} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="col-auto">
                <a href={learnmore} className="text-decoration-none">
                  {learnmoretext} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-auto mb-2 mb-sm-0">
              <a href={googleplay}>
                <img src="media\images\googlePlayBadge.svg" alt="googleplay" className="img-fluid" style={{ maxHeight: '40px' }}></img>
              </a>
            </div>
            <div className="col-auto">
              <a href={appStore}>
                <img alt="appStore" src="media\images\appstoreBadge.svg" className="img-fluid" style={{ maxHeight: '40px' }}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;