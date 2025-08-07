import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#e7e3e3ff" }}>
      <div className="row">
        <div className="col-1 mt-5"></div>
        <div className="col-9 mt-4">
          <h1>Support Portal</h1>
        </div>
        
        <div className="col-1 mt-4">
          <button className="btn btn-primary p-2 ">My tickets</button>
        </div>
        <div className="col-1 mt-4"></div>
      </div>
      <div className="row mt-5">
        
        <div className="col-1"></div>
        <div className="col-10">
          <form role="search"  >
            <div class="input-group mb-5" >
              <input
                type="search"
                class="form-control"
                style={{padding:'16px'}}
                placeholder="Eg:how do i activate F&O..."
                aria-label="Search"
                

                
              />
    
            </div>
          </form>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
