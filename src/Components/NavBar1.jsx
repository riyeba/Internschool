import React from "react";
import { Card } from "react-bootstrap";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineWifiCalling3 } from "react-icons/md";

function NavBar1() {
  return (
    <div className="container pt-2 border-bottom border-bottom-2">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        
      <div className="w-100 text-center d-block d-md-none" >
  <Card.Img
    variant="top"
    src="/images/WhatsApp Image 2025-02-07 at 8.48.55 AM (1).jpeg"
    className="img-fluid w-100"
    style={{ height: ""}} 
  />
</div>


      
        <div className="w-50 d-none d-md-block">
          <Card.Img
            variant="top"
            src="/images/WhatsApp Image 2025-02-07 at 8.48.55 AM (1).jpeg"
            className="w-25"
          />
        </div>

       
        <div className="d-flex flex-row gap-3 d-none d-md-flex">
          <div className="p-2 d-flex align-items-center gap-3 border-start">
            <MdOutlineWifiCalling3 className="fs-2 text-warning" />
            <div>
              <p className="fs-5 fw-bold">Call Us</p>
              <p className="fs-6">02472221355</p>
            </div>
          </div>

          <div className="p-2 d-flex align-items-center gap-3 border-start">
            <HiOutlineMailOpen className="fs-2 text-warning" />
            <div>
              <p className="fs-5 fw-bold">Email</p>
              <p className="fs-6">principal@billgatescollege.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar1;
