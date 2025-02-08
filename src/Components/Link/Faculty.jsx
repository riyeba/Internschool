import React from "react";

function Faculty() {
  return (
    <div className="container " style={{marginTop:"4rem"}}>
      <h1 className="fs-1 fw-bold" style={{ marginBottom: "4rem" }}>
        Faculty Details:
      </h1>

      <table className="table fs-5 table-bordered border-secondary table-auto w-100 text-center table-striped opacity-50">
     
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Member of Faculty</th>
            <th scope="col">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dr. Arshad Moizuddin Razvi</td>
            <td>B.Sc., M.C.M., M .Phil., Ph.D.</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Mr. Shivsamb Dagdu Kumbhar</td>
            <td>B.Com., M.Com., M.C.M.</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Mr. Ravi Vasantrao Waghe</td>
            <td>B.A., M.C.M.</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Mrs. Viddya Achutrao Gaikwad</td>
            <td>B.A., M.C.M., M.B.A.</td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Mr. Dnyandeo Navnath Jamale</td>
            <td>B.A.,M.C.M.</td>
          </tr>

          <tr>
            <th scope="row">6</th>
            <td>Mr. Ashok Shivajirao Shete</td>
            <td>B.Com., M.Com.</td>
          </tr>

          <tr>
            <th scope="row">7</th>
            <td>Mr. Hannure Ismail Laldle</td>
            <td>B.Sc., M.C.S.</td>
          </tr>

          <tr>
            <th scope="row">8</th>
            <td>Mr. Ashwinkumar Rajendra Bagga</td>
            <td>B.Com.,M.Com., SET</td>
          </tr>

          <tr>
            <th scope="row">9</th>
            <td>Dr. Daulatrao Rajendra Gholkar</td>
            <td>B. Com., M.C.M. M.Com. M.B.A., Ph. D.</td>
          </tr>

          <tr>
            <th scope="row">10</th>
            <td>Mrs. Arti Anantrao Deshmukh</td>
            <td>B.C.A., M.C.M.</td>
          </tr>

          <tr>
            <th scope="row">11</th>
            <td>Mrs. Sneha Sunil Patil</td>
            <td>B.Sc., M.B.A</td>
          </tr>

          <tr>
            <th scope="row">12</th>
            <td>Mrs. Mayuri Sandipan Shelke</td>
            <td>B. Com., M.Com.</td>
          </tr>

          <tr>
            <th scope="row">13</th>
            <td>Mr. Faijan Rabbani Patel</td>
            <td>B.A., M. Lib.</td>
          </tr>

          <tr>
            <th scope="row">14</th>
            <td>Mr. Sudarshan Govardhan Gurav</td>
            <td> B. Com., M.B.A.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Faculty;
