import React from 'react'
import { Button } from 'react-bootstrap'

function Studentform() {
  return (
    <div className='container' style={{marginTop:"4rem"}}>
        <h1 className="fs-1 fw-bold" style={{ marginBottom: "4rem" }}>
        Student can download various forms from here:
      </h1>
        <div className='d-flex flex-column'>
        <Button
            className="p-3 mt-4"
            style={{ borderRadius: '0', width: "30rem", height: "5rem", border:"0",backgroundColor:"hsl(45.25714285714285, 70.85020242914982%, 51.56862745098039%)" }}
          >
            <span className="fs-5 fw-semibold">Application FOR TRANSFER OF CERTIFICATE</span>
          </Button>

          <Button
            className="p-3 mt-4 "
            style={{ borderRadius: '0', width: "30rem", height: "5rem", border:"0", backgroundColor:"hsl(45.25714285714285, 70.85020242914982%, 51.56862745098039%)" }}
          >
            <span className="fs-5 fw-semibold">APPLICATION FOR BONAFIDE CERTIFICATE</span>
          </Button>
        </div>
    </div>
  )
}

export default Studentform