import React from "react";

function Objective() {
  return (
    <div className="container" style={{marginTop:"4rem"}}>
      <div>
        <h1 className="fs-1 fw-bold mb-4">Vision :</h1>
        <p className="fs-5 text-black opacity-50">
          To be a leading institution that provides a transformative education
          to create leaders and Innovators, and generates new knowledge for
          society and industry.
        </p>
      </div>

      <div>
        <h1 className="fs-1 fw-bold mb-4">Mission :</h1>
        <p className="fs-5 text-black opacity-50">
          To be a leading institution that provides a transformative education
          to create leaders and Innovators, and generates new knowledge for
          society and industry.
        </p>
        <ol className="fs-5 text-black opacity-50 text-decoration-none list-style-type: none">
            <li>To provide an education that transforms students through rigorous coursework and by providing an understanding of the needs of society and industry.</li>
            <li>To create an ambience in which new ideas, research from which the leaders and innovators of tomorrow emerge.</li>
            <li>To encourage innovative thinking and creativity and inculcate research skills in our students.</li>
            <li>To optimize the use of available infrastructure for sustained development of the college.</li>
            <li>To supplement and enrich the existing curriculum through seminars and extension lectures by eminent scholars.</li>
        </ol>
      </div>
    </div>
  );
}

export default Objective;
