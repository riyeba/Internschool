import React from "react";

function Contactus() {
  return (
    <div className="container" style={{marginTop:"4rem"}}>
      <div>
        <h1 className="fs-1 fw-bold" style={{ marginBottom: "2rem" }}>
          {" "}
          Contact Us :
        </h1>
        <p className="fs-5 opacity-50">Phone: 02472 221355</p>
      </div>

      <div>
        <p className="fs-5 opacity-50">Email: principal@billgatescollege.in</p>
        <p className="fs-5 opacity-50">bgiocsam@yahoo.co.in</p>
      </div>

      <div>
        <h1 className="fs-1 fw-bold" style={{ marginBottom: "2rem" }}>
         
          Address :
        </h1>
        <p className="fs-5 opacity-50">Beside Chhayadeep Lawns,</p>
        <p className="fs-5 opacity-50">Aurangabad Road,</p> 
        <p className="fs-5 opacity-50">Osmanabad</p> 
      </div>
    </div>
  );
}

export default Contactus;
